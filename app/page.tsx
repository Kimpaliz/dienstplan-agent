"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DienstplanApp() {
  const [role, setRole] = useState("none");
  const [password, setPassword] = useState("");
  const [schichten, setSchichten] = useState([]);
  const [wunsch, setWunsch] = useState("");

  const adminPass = "admin123";
  const mitarbeiterPass = "mitarbeiter123";

  const handleLogin = () => {
    if (password === adminPass) setRole("admin");
    else if (password === mitarbeiterPass) setRole("mitarbeiter");
    else alert("Falsches Passwort, oh Untertan des Chaos!");
  };

  const handleAddSchicht = () => {
    const text = prompt("Gib die Schichtbeschreibung ein:");
    if (text) setSchichten([...schichten, text]);
  };

  const handleWunschAbsenden = () => {
    alert("Wunsch eingereicht: " + wunsch);
    setWunsch("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {role === "none" && (
        <Card className="mb-4">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">Login</h2>
            <Input
              placeholder="Passwort eingeben..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleLogin}>Einloggen</Button>
          </CardContent>
        </Card>
      )}

      {role === "admin" && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold mb-2">Admin-Dashboard</h2>
            <Button onClick={handleAddSchicht} className="mb-2">Schicht hinzufügen</Button>
            <ul className="list-disc pl-5">
              {schichten.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {role === "mitarbeiter" && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold mb-2">Mitarbeiter-Bereich</h2>
            <h3 className="font-semibold mb-2">Aktuelle Schichten:</h3>
            <ul className="list-disc pl-5 mb-4">
              {schichten.length === 0 && <li>Keine Schichten eingetragen.</li>}
              {schichten.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <Textarea
              placeholder="Wunsch (z. B. Urlaub, Freiwunsch, Schichtwunsch)"
              value={wunsch}
              onChange={(e) => setWunsch(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleWunschAbsenden}>Wunsch absenden</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
