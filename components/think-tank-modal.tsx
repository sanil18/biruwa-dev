"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ThinkTankModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function ThinkTankModal({ isOpen, onOpenChange }: ThinkTankModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Biruwa's Think Tank</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-slate-700">
          {/* Introduction */}
          <section>
            <p className="text-base leading-relaxed">
              Biruwa's Think Tank is an initiative developed by the five co-founders who wanted more people to talk about
              the current issues of climate justice and governance and not just talk but think. We wanted people to come
              together and think meaningfully with a purpose, a purpose to not just understand yourself but also create
              outcomes that would ultimately make the targeted groups think about the issue which they never thought
              existed. Our thinkers are the roots of our Biruwa and we aim to work not in a hierarchical manner but
              together.
            </p>
          </section>

          {/* Thinkers 2024/25 */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Thinkers 2024/25</h3>
            <p className="text-base leading-relaxed">
              The pioneers of Biruwa's Think Tank were the Thinkers of 2024 who were 19 in total belonging from various
              parts of Nepal.
            </p>
          </section>

          {/* Thinkers 2025/26 */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Thinkers 2025/26</h3>
            <p className="text-base leading-relaxed">
              The second cohort of Biruwa's Think Tank consists of three thinkers who have taken the lead in the three
              thematic areas.
            </p>
          </section>

          {/* Our Works */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Our Works</h3>
            <p className="text-base leading-relaxed mb-4">
              Think tank comprises of 3 thematic areas: White Paper, Educational Material, and Awareness Raising.
            </p>

            {/* White Paper */}
            <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">White Paper</h4>
              <p className="text-sm leading-relaxed">
                The White Paper covers a range of topics related to climate justice and governance, encompassing
                subjects from human rights violations to the financial aspects connected to these issues. It is
                specifically tailored for individuals seeking to learn more about climate change, with a focus on Nepal.
                The content is designed to provide in-depth insights into various dimensions of climate justice and
                governance, offering a comprehensive resource for those interested in these critical matters.
              </p>
            </div>

            {/* Educational Material */}
            <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Educational Material</h4>
              <p className="text-sm leading-relaxed">
                The educational materials, on the other hand, are designed to be concise and visually engaging, making
                them accessible to a broader audience, particularly those in their early educational stages, such as
                primary, secondary, and higher secondary students. These materials will be distributed to schools and
                colleges that the thinkers have partnered with and will also be made publicly available on our website.
              </p>
            </div>

            {/* Awareness Raising */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Awareness Raising</h4>
              <p className="text-sm leading-relaxed">
                The awareness-raising initiatives focus on the principle that "ignorance of the law is no excuse" while
                protecting and promoting the rights of those who may not have ignored the law, but simply lack access to
                the necessary tools, resources, or information. These programs, conducted by the thinkers, are carefully
                designed based on age groups, educational backgrounds, and other relevant demographics to create
                materials that are specifically tailored to meet the needs of each population.
              </p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
