"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const ContactFormCard: React.FC = () => {
  return (
    <Card className="border-white/10 bg-black/45 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
      <CardContent className="p-8 sm:p-10">
        <div className="space-y-4">
          <h2 className="text-display-2xl font-bold leading-[1.05] text-white">
            Let’s <span className="text-teal-400">Build Something</span>
            <br />
            Great
          </h2>

          <p className=" text-md font-[400] leading-6 text-white/55">
            Got an idea, a project, or just want to connect? I’m always open to new
            conversations.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-neutral">Name</div>
            <Input
              placeholder="Enter your name"
              className="h-11 rounded-none border-white/10 bg-black/30 text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-neutral">Email</div>
            <Input
              placeholder="Enter your email"
              type="email"
              className="h-11 rounded-none border-white/10 bg-black/30 text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-neutral">Message</div>
            <Textarea
              placeholder="Enter your message"
              className="min-h-40 rounded-none resize-none border-white/10 bg-black/30 text-white placeholder:text-white/30"
            />
          </div>

          <Button
            type="button"
            className="mt-3 h-12 w-full rounded-none bg-white text-black hover:bg-white/90"
          >
             <Image src="/icons/mail-black.svg" alt="Mail icon" width={16} height={16} />
            Send Message
          </Button>
        </div>

        <div className="pointer-events-none h-5.5 sm:h-4.5" />
      </CardContent>

      <div className="hidden xl:block" style={{ height: 0 }} />
      <style jsx>{`
        @media (min-width: 1280px) {
          :global([data-contact-form-card]) {
            min-height: 755px;
          }
        }
      `}</style>
    </Card>
  );
};