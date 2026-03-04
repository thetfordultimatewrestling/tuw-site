import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Ticket, Mail } from "lucide-react";

export default function TUWWebsite() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TUW Logo" className="h-10" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#roster">Roster</a>
            <a href="#calendar">2026 Calendar</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-red-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          THETFORD ULTIMATE WRESTLING
        </motion.h1>
        <p className="text-xl text-gray-300 mb-8">
          Québec’s premier independent wrestling promotion.
        </p>
        <a href="https://lepointdevente.com/tickets/tuwultimaterevolution2026" target="_blank">
          <Button className="text-lg px-10 py-6 rounded-2xl">Buy Tickets</Button>
        </a>
      </section>

      {/* MAIN EVENT */}
      <section id="events" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Ultimate Revolution III</h2>
        <Card className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
          <img src="/ultimate-revolution-banner.png" alt="Ultimate Revolution" className="w-full" />
          <CardContent className="p-10 text-center">
            <p className="text-xl mb-4">April 25, 2026 – 7:00 PM</p>
            <p className="text-gray-400 mb-6">Centre Récréatif de Robertsonville</p>
            <a href="https://lepointdevente.com/tickets/tuwultimaterevolution2026" target="_blank">
              <Button className="rounded-2xl flex items-center gap-2 mx-auto">
                <Ticket /> Get Your Seats
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>

      {/* ROSTER */}
      <section id="roster" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Talent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Buxx",
              "Tony Icon",
              "Dreya Mitchell",
              "Leah Sparks",
              "Jonny Rush",
              "Shane Pinto",
            ].map((name, i) => (
              <Card key={i} className="bg-zinc-900 rounded-2xl shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="h-48 bg-red-800 rounded-xl mb-6 flex items-center justify-center text-sm">
                    Add Photo
                  </div>
                  <h3 className="text-2xl font-bold">{name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 CALENDAR */}
      <section id="calendar" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">2026 Event Calendar</h2>
        <Card className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
          <img src="/tuw-2026-calendar.png" alt="TUW 2026 Calendar" className="w-full" />
        </Card>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-gradient-to-t from-red-900 to-black">
        <h2 className="text-4xl font-bold mb-6">Contact TUW</h2>
        <p className="text-gray-300 mb-8">For bookings, sponsorships, or media inquiries.</p>
        <Button className="px-8 py-6 rounded-2xl flex items-center gap-2 mx-auto">
          <Mail /> info@tuwrestling.com
        </Button>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm bg-black">
        © {new Date().getFullYear()} Thetford Ultimate Wrestling
      </footer>
    </div>
  );
}
