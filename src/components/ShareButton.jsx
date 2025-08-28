import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

function ShareButton({ title, excerpt, className = "" }) {
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  const sharePost = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const encodedTitle = encodeURIComponent(title)
    const encodedExcerpt = encodeURIComponent(excerpt)
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodedTitle}&via=QuickRXPharmacy`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0ARead more: ${url}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
    setShareMenuOpen(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
    setShareMenuOpen(false)
  }

  // Close share menu when clicking outside
  const handleClickOutside = (event) => {
    if (shareMenuOpen && !event.target.closest('.share-menu')) {
      setShareMenuOpen(false)
    }
  }

  // Add event listener for clicking outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [shareMenuOpen])

  return (
    <div className={`relative share-menu ${className}`}>
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3"
        onClick={() => setShareMenuOpen(!shareMenuOpen)}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      
      {/* Share Menu */}
      {shareMenuOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10 min-w-[200px]">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => sharePost('facebook')}
              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
            >
              <Facebook className="h-4 w-4 text-blue-600" />
              Facebook
            </button>
            <button
              onClick={() => sharePost('twitter')}
              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
            >
              <Twitter className="h-4 w-4 text-blue-400" />
              Twitter
            </button>
            <button
              onClick={() => sharePost('linkedin')}
              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
            >
              <Linkedin className="h-4 w-4 text-blue-700" />
              LinkedIn
            </button>
            <button
              onClick={() => sharePost('email')}
              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
            >
              <Mail className="h-4 w-4 text-gray-600" />
              Email
            </button>
          </div>
          <div className="border-t border-gray-200 mt-1 pt-1">
            <button
              onClick={copyToClipboard}
              className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShareButton 