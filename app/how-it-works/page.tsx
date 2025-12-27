"use client"

import { motion } from "framer-motion"
import {
  Github,
  Key,
  FileText,
  Sparkles,
  Download,
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    icon: Key,
    title: "Get Your API Key",
    description:
      "Obtain a free Gemini API key from Google AI Studio. This key powers the AI that generates your README.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Github,
    title: "Enter Repository Details",
    description:
      "Provide your GitHub repository URL, project name, and paste your project structure (use 'tree' command).",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    title: "AI Generation",
    description:
      "Our AI analyzes your project structure and generates a comprehensive, professional README with all essential sections.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: FileText,
    title: "Preview & Edit",
    description:
      "Review the generated README in a beautiful preview mode or view the raw markdown. Make any adjustments as needed.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Download,
    title: "Download & Use",
    description:
      "Copy to clipboard or download the README.md file directly. Add it to your repository and you're done!",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate comprehensive READMEs in seconds, not hours.",
  },
  {
    icon: Code2,
    title: "Smart Analysis",
    description: "AI understands your project structure and tech stack automatically.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Your API key is stored locally. We never store your data on our servers.",
  },
  {
    icon: Clock,
    title: "Time Saver",
    description: "Focus on coding while AI handles your documentation.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Powered by Google Gemini AI
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Readme.ify
            </span>{" "}
            Works
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Transform your project documentation in just a few simple steps. No more staring at a
            blank README file!
          </p>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden lg:block -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Step Number Badge (center on large screens) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20 lg:col-start-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                      <CardHeader className="pb-4">
                        <div
                          className={`flex items-center gap-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                        >
                          <div className={`p-3 rounded-xl ${step.bgColor}`}>
                            <step.icon className={`h-6 w-6 ${step.color}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 lg:hidden mb-1">
                              <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                Step {index + 1}
                              </span>
                            </div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden lg:block" />
                ) : (
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Readme.ify?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with developers in mind, our tool makes documentation effortless.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    style={{ animationDelay: `${index * 0.5}s` }}
                    className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2"
                  >
                    <feature.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-500 p-8 sm:p-12 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-black/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Ready to Create Your README?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-lg mb-8 max-w-xl mx-auto"
            >
              Start generating professional documentation for your projects in seconds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base font-semibold group"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
