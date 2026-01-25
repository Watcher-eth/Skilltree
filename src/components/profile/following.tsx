"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AddressBookContent() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="px-6 py-4 text-center border-b border-gray-100">
        <h1 className="text-lg font-semibold text-foreground">Address Book</h1>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center pt-12 px-6 py-6">
        <div className="w-full max-w-md">
          {/* Search Input */}
          <div className="relative flex items-center bg-secondary/50 rounded-xl border border-border overflow-hidden">
            <Search className="w-5 h-5 text-muted-foreground ml-4" />
            <input
              type="text"
              placeholder="Search or Find an User"
              className="flex-1 bg-transparent px-3 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <Button className="bg-[#00a6fb] hover:bg-[#0096fb] text-white rounded-lg px-4 py-2 h-8 mr-2 text-sm font-medium">
              Paste
            </Button>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center mt-16">
            <AddressBookIllustration />
            <p className="text-muted-foreground text-sm mt-6">Your address book is empty.</p>
            <p className="text-muted-foreground text-sm">Your following will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AddressBookIllustration() {
  return (
    <div className="w-32 h-28 relative">
      {/* Background card shadow */}
      <div className="absolute left-2 top-2 w-20 h-24 bg-[#f5f5f4] rounded-lg transform -rotate-6" />
      
      {/* Main contact card */}
      <div className="absolute left-6 top-0 w-20 h-24 bg-[#e7e5e4] rounded-lg shadow-sm overflow-hidden">
        {/* Person silhouette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            {/* Head */}
            <div className="w-6 h-6 bg-[#a8a29e] rounded-full" />
            {/* Body */}
            <div className="w-10 h-6 bg-[#a8a29e] rounded-t-full mt-1" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* Blue square */}
      <div className="absolute right-4 top-8 w-4 h-4 bg-[#60a5fa] rounded" />
      {/* Green square */}
      <div className="absolute right-2 top-14 w-3 h-3 bg-[#4ade80] rounded" />
      {/* Yellow/orange square */}
      <div className="absolute right-8 bottom-2 w-3 h-3 bg-[#fbbf24] rounded" />
      
      {/* Small dots */}
      <div className="absolute left-0 top-10 w-1.5 h-1.5 bg-[#d1d5db] rounded-full" />
      <div className="absolute right-0 top-4 w-1 h-1 bg-[#d1d5db] rounded-full" />
    </div>
  )
}
