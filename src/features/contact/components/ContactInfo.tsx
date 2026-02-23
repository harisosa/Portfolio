"use client";

import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { ContactMeta } from "@/features/contact/type";
import { SocialMedia } from "@/features/social-media/components";
import { SOCIAL_MEDIA } from "@/features/social-media/constants";

type ContactInfoProps = { meta: ContactMeta };

export const ContactInfo: React.FC<ContactInfoProps> = ({ meta }) => {
  return (
    <div className="w-full">
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-neutral-25">{meta.addressLabel}</div>
          <div className="text-md text-neutral-400">{meta.addressValue}</div>
          <Separator className="bg-white/10" />
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-neutral-25">{meta.contactLabel}</div>
          <div className="text-md text-neutral-400">{meta.contactValue}</div>
          <Separator className="bg-white/10" />
        </div>

        <div className="space-y-4">
          <div className="text-xl font-semibold text-neutral-25">{meta.socialLabel}</div>
          <SocialMedia socials={SOCIAL_MEDIA} />
        </div>
      </div>
    </div>
  );
};