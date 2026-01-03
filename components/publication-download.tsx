import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PublicationDownloadProps {
  title: string
  description: string
  pdfUrl: string
  date: string
  category: string
  pages: number
}

export default function PublicationDownload({
  title,
  description,
  pdfUrl,
  date,
  category,
  pages,
}: PublicationDownloadProps) {
  return (
    <div className="publication-card flex gap-4 p-4 rounded-lg border border-dashed border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="bg-red-100 rounded-md p-3 h-14 w-14 flex items-center justify-center shrink-0">
        <Download className="h-6 w-6 text-red-600" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600 mb-3">{description}</p>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {date}
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {pages} pages
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              {category}
            </span>
          </div>
          <Button
            asChild
            size="sm"
            className="download-btn bg-red-500 hover:bg-red-600 text-white rounded-full mt-2 sm:mt-0"
          >
            <Link href={pdfUrl} target="_blank" download>
              <Download className="mr-1 h-4 w-4" /> Download PDF
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
