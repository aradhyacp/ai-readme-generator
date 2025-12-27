"use client"

import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { motion, AnimatePresence } from "framer-motion"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import "github-markdown-css/github-markdown.css";
import {
  Sparkles,
  Copy,
  Download,
  Github,
  Layout,
  Terminal,
  Key,
  Loader2,
  CheckCircle2,
  Code2,
  Eye,
} from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Skeleton } from "./ui/skeleton"
import AiGen from "../utils/ReadmeAiGenerator"

const Hero = () => {
  const [readMe, setReadMe] = useState("")
  const [view, setView] = useState("preview")
  const [repoUrl, setRepoUrl] = useState("")
  const [projectName, setProjectName] = useState("")
  const [projectStruct, setProjectStruct] = useState("")
  const [aiApiKey, setAiApiKey] = useState("")
  const [apiKeyFromStorage, setApiKeyFromStorage] = useState(false)
  const [loading, setLoading] = useState(false)

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    const backgrounds = {
      success: "linear-gradient(to right, #10b981, #059669)",
      error: "linear-gradient(to right, #ef4444, #dc2626)",
      info: "linear-gradient(to right, #3b82f6, #2563eb)",
    }
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: backgrounds[type],
        borderRadius: "8px",
        fontWeight: "500",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
      },
    }).showToast()
  }

  useEffect(() => {
    const savedKey = localStorage.getItem("GEMINI_API_KEY")
    if (savedKey) {
      setAiApiKey(savedKey)
      setApiKeyFromStorage(true)
    }
  }, [])

  const handleGenReadMe = async () => {
    if (!aiApiKey) {
      showToast("Please provide a Gemini API key to generate the README.", "error")
      return
    }
    setLoading(true)
    try {
      const content = await AiGen({
        apiKey: aiApiKey,
        repoUrl: repoUrl,
        projectName: projectName,
        projectStruct: projectStruct,
        aboutProject: "",
      })
      setReadMe(content)
      showToast("README Generated! Your documentation is ready.", "success")
    } catch (error) {
      console.error("[v0] Generation error:", error)
      showToast("An error occurred while generating your README.", "error")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(readMe)
    showToast("README content copied to clipboard!", "success")
  }

  const downloadReadme = () => {
    const element = document.createElement("a")
    const file = new Blob([readMe], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "README.md"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="container mx-auto min-h-[calc(100vh-4rem)] p-4 py-8 sm:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Input Configuration */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-4">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-primary" />
                Project Details
              </CardTitle>
              <CardDescription>Configure your project information to generate documentation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Github Repo URL</label>
                <div className="relative group">
                  <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="https://github.com/user/repo"
                    className="pl-10"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepoUrl(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input placeholder="e.g. Awesome App" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Project Structure</label>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-muted-foreground">
                    Tree Output
                  </span>
                </div>
                <Textarea
                  placeholder={`src/\n├─ components/\n│  └─ Header.tsx\npackage.json`}
                  className="h-[120px] resize-none overflow-y-auto font-mono text-xs leading-relaxed"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProjectStruct(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Gemini API Key</label>
                <div className="relative group">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    type="password"
                    placeholder="AIza..."
                    className={`pl-10 transition-all ${apiKeyFromStorage ? "border-green-500/50 focus-visible:ring-green-500/20" : ""}`}
                    value={aiApiKey}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value
                      setAiApiKey(value)
                      localStorage.setItem("GEMINI_API_KEY", value)
                      setApiKeyFromStorage(false)
                    }}
                  />
                </div>
                {apiKeyFromStorage && (
                  <p className="flex items-center gap-1.5 text-[10px] font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Fetched from local storage
                  </p>
                )}
              </div>

              <Button
                onClick={handleGenReadMe}
                disabled={loading}
                className="w-full h-11 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate README
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Output Display */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-8">
          <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm flex flex-col overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b bg-muted/30 px-4 py-3 gap-4">
              <Tabs value={view} onValueChange={setView} className="w-auto">
                <TabsList className="grid w-[200px] grid-cols-2">
                  <TabsTrigger value="preview" className="text-xs gap-2">
                    <Eye className="h-3 w-3" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="raw" className="text-xs gap-2">
                    <Code2 className="h-3 w-3" />
                    Raw
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard} disabled={!readMe}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button size="sm" onClick={downloadReadme} disabled={!readMe}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            <CardContent className="flex-1 overflow-auto p-0">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="skeleton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 sm:p-8 space-y-6"
                  >
                    {/* Title skeleton */}
                    <Skeleton className="h-8 w-3/4" />
                    
                    {/* Badge skeletons */}
                    <div className="flex gap-2">
                      <Skeleton className="h-5 w-20 rounded-full" />
                      <Skeleton className="h-5 w-24 rounded-full" />
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                    
                    {/* Section heading skeleton */}
                    <Skeleton className="h-6 w-1/3 mt-4" />
                    
                    {/* Content skeleton */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-11/12" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    
                    {/* Another section skeleton */}
                    <Skeleton className="h-6 w-1/4 mt-4" />
                    
                    {/* List items skeleton */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>
                    
                    {/* Code block skeleton */}
                    <Skeleton className="h-32 w-full rounded-lg mt-4" />
                    
                    {/* More content skeleton */}
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </motion.div>
                ) : readMe ? (
                  <motion.div
                    key={view}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 sm:p-8"
                  >
                    {view === "preview" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none markdown-body">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{readMe}</ReactMarkdown>
                      </div>
                    ) : (
                      <pre className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
                        <code>{readMe}</code>
                      </pre>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex h-full min-h-[400px] items-center justify-center text-center p-8">
                    <div className="max-w-xs space-y-4">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Terminal className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">No README Generated</h3>
                        <p className="text-sm text-muted-foreground">
                          Fill in your project details on the left and click "Generate README" to get started.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
