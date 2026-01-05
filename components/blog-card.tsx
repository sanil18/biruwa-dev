"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogCardProps {
    id: string
    title: string
    description: string
    date: string
    author: string
    imageUrl?: string
    category: string
}

export default function BlogCard({ id, title, description, date, author, imageUrl, category }: BlogCardProps) {
    return (
        <div className="group relative h-full flex flex-col bg-white rounded-2xl border-2 border-dashed border-emerald-600/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-600">
            {/* Blog Image */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                    src={imageUrl || "https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=1767&auto=format&fit=crop"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-3 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                        {date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-emerald-600" />
                        {author}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 font-display leading-snug">
                    {title}
                </h3>

                <p className="text-slate-600 mb-6 text-sm sm:text-base line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/blogs/${id}`}
                        className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:gap-3 transition-all duration-300"
                    >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Decorative floating line shorthand */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
    )
}
