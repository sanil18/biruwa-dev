"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Copy, Facebook, Linkedin, Instagram, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ShareModalProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    url: string
    title: string
}

export default function ShareModal({ isOpen, onOpenChange, url, title }: ShareModalProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    const shareLinks = [
        {
            name: "Facebook",
            icon: <Facebook className="w-5 h-5" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            url: `https://www.instagram.com/biruwa/`, // Instagram doesn't support sharing links directly
            color: "bg-[#E4405F] hover:bg-[#E4405F]/90",
            info: "Redirects to Biruwa IG profile"
        },
    ]

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-[#FFFBF5] border-emerald-100 flex flex-col p-6 rounded-3xl">
                <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                        <Share2 className="w-6 h-6 text-emerald-600" />
                        Spread the Word
                    </DialogTitle>
                    <DialogDescription className="text-slate-500">
                        Help us reach more people by sharing this story.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl ${link.color} text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/5 group`}
                            title={link.info || `Share on ${link.name}`}
                        >
                            {link.icon}
                            <span className="text-xs font-bold uppercase tracking-wider">{link.name}</span>
                        </a>
                    ))}
                </div>

                <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                        Copy Link
                    </label>
                    <div className="flex items-center gap-2 bg-white/50 border border-emerald-100 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                        <Input
                            value={url}
                            readOnly
                            className="border-none bg-transparent focus-visible:ring-0 text-slate-600 text-sm h-9 px-4 overflow-hidden text-ellipsis whitespace-nowrap"
                        />
                        <Button
                            onClick={handleCopy}
                            size="sm"
                            className={`rounded-full px-5 h-9 font-bold transition-all ${copied ? "bg-emerald-600 hover:bg-emerald-600" : "bg-emerald-700 hover:bg-emerald-800"
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 mr-2" />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <DialogClose asChild>
                        <Button variant="ghost" className="text-slate-400 hover:text-slate-600 font-medium">
                            Close
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}
