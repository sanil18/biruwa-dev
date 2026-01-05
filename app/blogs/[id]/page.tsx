"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag, Share2, Check } from "lucide-react"
import { blogDb } from "@/lib/db"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MarkdownContent } from "@/components/MarkdownContent"
import ShareModal from "@/components/share-modal"

export default function BlogDetail() {
    const params = useParams()
    const router = useRouter()
    const blogId = params.id as string

    const blog = blogDb.getById(blogId)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    const handleShare = () => {
        setIsShareModalOpen(true)
    }

    if (!blog) {
        return (
            <div className="wrapper min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-20 px-4 text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-4xl font-bold mb-4 font-display text-slate-900">Oops!</h1>
                        <p className="text-slate-600 mb-8 text-lg">The blog post you're looking for seems to have drifted away.</p>
                        <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6">
                            <Link href="/blogs">Explore Other Blogs</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const renderContent = (content: string) => {
        return <MarkdownContent content={content} />
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FFFBF5]">
            <Navbar />

            <main className="flex-grow pt-8 pb-16 sm:pt-12 sm:pb-24">
                <div className="container max-w-4xl px-4 sm:px-6">
                    {/* Header Section */}
                    <article>
                        <ScrollReveal delay={200} className="mb-10 pt-20 sm:pt-24">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                    {blog.category}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-display leading-tight tracking-tight">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-500 border-y border-dashed border-emerald-600/20 py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                        {blog.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 font-bold text-sm leading-none">{blog.author}</span>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mt-1">Written By</span>
                                    </div>
                                </div>
                                <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100/50">
                                        <Calendar className="h-4 w-4 text-emerald-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 font-bold text-sm leading-none">{blog.date}</span>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mt-1">Published</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Featured Image */}
                        <ScrollReveal delay={300} className="mb-16">
                            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 group">
                                <Image
                                    src={blog.imageUrl || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1770&auto=format&fit=crop"}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </ScrollReveal>

                        {/* Content Body */}
                        <ScrollReveal delay={400} className="">
                            <div className="prose prose-emerald prose-lg max-w-none">
                                <div className="bg-white/70 backdrop-blur-sm rounded-[3rem] p-8 sm:p-16 shadow-2xl shadow-emerald-900/5 border border-white/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_31px,#f0fdf4_32px)] bg-[length:100%_32px] opacity-20 pointer-events-none"></div>

                                    <div className="relative z-10">
                                        {renderContent(blog.content)}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </article>

                    {/* Share/Action Sector */}
                    <ScrollReveal delay={500} className="mt-16">
                        <div className="relative p-8 sm:p-12 rounded-2xl bg-emerald-900 text-white shadow-xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl"></div>

                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display leading-tight">Shared knowledge is the <span className="text-emerald-400 italic">first seed</span> of change.</h3>
                                <p className="text-emerald-100/80 mb-8 max-w-lg mx-auto text-base">
                                    If you found this article valuable, help us reach more people who are passionate about climate justice.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button
                                        onClick={handleShare}
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 py-5 font-bold shadow-lg shadow-black/20 text-sm transition-all active:scale-95 group"
                                    >
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Spread the Word
                                    </Button>
                                    <Button asChild className="bg-white hover:bg-emerald-50 text-emerald-900 rounded-full px-8 py-5 font-bold text-sm shadow-lg shadow-black/20">
                                        <Link href="/contact" className="flex items-center">
                                            <Tag className="mr-2 h-4 w-4" />
                                            Join the Conversation
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Back Button at Bottom */}
                    <div className="mt-12 flex justify-center">
                        <Button
                            asChild
                            variant="ghost"
                            className="group text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 px-6 py-4 rounded-full transition-all"
                        >
                            <Link href="/blogs" className="flex items-center">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to all blogs
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />

            <ShareModal
                isOpen={isShareModalOpen}
                onOpenChange={setIsShareModalOpen}
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={blog.title}
            />
        </div>
    )
}
