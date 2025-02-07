import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, User } from "lucide-react";

export default function Dashboard() {
  const [chat, setChat] = useState("");
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Camlet</h1>
        <div className="flex gap-4">
          <User className="w-6 h-6" />
          <span>Vijay</span>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-[#1d1d2e] p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">Total Money</h2>
            <p className="text-2xl">5,000</p>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a3f] p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">Money Spent</h2>
            <p className="text-2xl">200</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1d1d2e] p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">Saving</h2>
            <p className="text-2xl">1500</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Card className="bg-[#29293d] p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">Vital Expenses</h2>
            <ul className="list-disc ml-4 mt-2">
              <li>Room Rent - 3000</li>
              <li>Food - 2500</li>
              <li>Water - 300</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-[#1d1d2e] p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">BBOT</h2>
            <p className="text-sm mt-2">Sam, from the past 5 days, your expenses have been increasing.</p>
            <div className="flex items-center mt-4 border rounded p-2">
              <Input
                className="bg-transparent border-none text-white"
                placeholder="Chat with BBOT"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
              />
              <Button className="ml-2">Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
