"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { blogDb } from "@/lib/db"
import { ScrollReveal } from "@/components/scroll-reveal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Blogs() {
    const blogs = blogDb.getAll()

    return (
        <div className="wrapper min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-8 pb-12 sm:pt-10 sm:pb-20 relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50/20 rounded-full blur-3xl -z-10"></div>

                <div className="container px-4 sm:px-6">

                    <ScrollReveal className="text-center mb-12 sm:mb-16" delay={100}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display relative inline-block">
                            Biruwa Blogs
                            <svg
                                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full animate-float-line"
                                viewBox="0 0 100 8"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,5 Q20,0 40,5 T80,5 T120,5"
                                    fill="none"
                                    stroke="#F59E0B"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-4 leading-relaxed">
                            Explore our latest thoughts, research, and stories on climate justice and sustainable governance.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogs.length > 0 ? (
                            blogs.map((blog, index) => (
                                <ScrollReveal key={blog.id} delay={200 + index * 100}>
                                    <BlogCard
                                        id={blog.id}
                                        title={blog.title}
                                        description={blog.description}
                                        date={blog.date}
                                        author={blog.author}
                                        imageUrl={blog.imageUrl}
                                        category={blog.category}
                                    />
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 border-2 border-dashed border-slate-200 rounded-2xl bg-white/50">
                                <p className="text-slate-500 font-medium italic">New insights are taking root. Stay tuned!</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-16 sm:mt-24">
                        <Button
                            asChild
                            variant="outline"
                            className="group flex items-center text-emerald-700 border-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 transition-all duration-300 shadow-sm"
                        >
                            <Link href="/" className="flex items-center">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
