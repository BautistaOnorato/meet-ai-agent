"use client";

import {
  BotIcon,
  ChefHatIcon,
  CircleCheckBigIcon,
  CopyIcon,
  HandshakeIcon,
  RocketIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const AGENT_NAME = "Italian Chef";
const AGENT_INSTRUCTIONS = "You are a professional Italian chef. I will give you a recipe and you will guide me step by step to cook it properly, with helpful tips if needed."
const MEETING_NAME = "Cooking a perfect meal";

export const GetStartedView = () => {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="py-4 px-4 md:px-8 flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold flex items-center gap-x-2">
          <RocketIcon className="size-8" />
          Get Started with Thinki
        </h1>
        <p className="text-base text-neutral-700">
          Welcome to <span className="font-semibold text-black">Thinki</span> —
          your platform to create AI agents and solve real-world problems
          through interactive video calls.
        </p>
        <p className="text-base text-neutral-700">
          With <span className="font-semibold text-black">Thinki</span>, you
          can:
        </p>
        <ul className="flex flex-col gap-y-3">
          <li className="text-base text-neutral-700 flex items-center gap-x-2 ml-4">
            <BotIcon className="size-6" />
            Create custom{" "}
            <span className="font-semibold text-black">AI agents</span> tailored
            to specific tasks.
          </li>
          <li className="text-base text-neutral-700 flex items-center gap-x-2 ml-4">
            <VideoIcon className="size-6" />
            Start{" "}
            <span className="font-semibold text-black">
              video meetings
            </span>{" "}
            with these agents.
          </li>
          <li className="text-base text-neutral-700 flex items-center gap-x-2 ml-4">
            <HandshakeIcon className="size-6" />
            Get real-time help on anything — from writing code to cooking a
            perfect meal.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          In this guide, we’ll walk you through how to create your own personal{" "}
          <span className="font-semibold text-black">cooking assistant</span>{" "}
          and set up a meeting to prepare a meal together.
        </p>
      </div>

      <div className="flex flex-col gap-y-4 items-start">
        <h4 className="text-2xl font-semibold flex items-center gap-x-2">
          <ChefHatIcon className="size-6" />
          Use Case: Cooking with Your AI Chef
        </h4>
        <p className="text-base text-neutral-700">
          Let’s say you want help preparing a recipe. You’ll:
        </p>
        <ol className="flex flex-col gap-y-3 list-decimal list-inside ml-4">
          <li className="text-base text-neutral-700 ">
            Create an AI agent with instructions to act like a chef.
          </li>
          <li className="text-base text-neutral-700 ">
            Set up a meeting with that agent.
          </li>
          <li className="text-base text-neutral-700 ">
            Start cooking with real-time guidance!
          </li>
        </ol>
      </div>

      <div className="flex flex-col gap-y-4 items-start">
        <h4 className="text-2xl font-semibold flex items-center gap-x-2">
          <BotIcon className="size-6" />
          Step 1: Create an Agent
        </h4>
        <p className="text-base text-neutral-700">
          Your <span className="font-semibold text-black">Agent</span> is the
          virtual brain behind your meeting. Follow these steps to create one:
        </p>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            1. Go to the Agents Page
          </h5>

          <p className="text-base text-neutral-700">
            Navigate to the{" "}
            <Link
              href="/agents"
              className="font-semibold text-black underline"
              target="_blank"
            >
              Agents
            </Link>{" "}
            section from the sidebar.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            2. Click &quot;New Agent&quot;
          </h5>

          <p className="text-base text-neutral-700">
            Press the{" "}
            <span className="font-semibold text-black">+ New Agent</span> button
            to open the agent creation form.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            3. Name Your Agent
          </h5>

          <p className="text-base text-neutral-700">
            Give your agent a{" "}
            <span className="font-semibold text-black">name</span> to help you
            remember it later. We are going to use the name{" "}
            <span
              className="font-semibold text-black cursor-pointer"
              onClick={() => copyToClipboard(AGENT_NAME)}
            >
              &quot;{AGENT_NAME}&quot;
            </span>{" "}
            in this example.
          </p>
        </div>
        
        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            4. Provide Instructions
          </h5>

          <p className="text-base text-neutral-700">
            Provide your agent with{" "}
            <span className="font-semibold text-black">instructions</span> to
            act like a chef. We are going to use the following instructions:
          </p>

          <div className="flex border rounded-lg p-4 bg-muted relative">
            <div className="absolute top-2 right-2 flex items-center gap-x-2 border p-1.5 rounded-sm cursor-pointer" onClick={() => copyToClipboard(AGENT_INSTRUCTIONS)}>
              <CopyIcon className="size-4" />
            </div>
            <code className="text-base text-neutral-700 max-w-4xl">
              {AGENT_INSTRUCTIONS}
            </code>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            5. Click &quot;Create&quot;
          </h5>

          <p className="text-base text-neutral-700">
            Your agent is now ready! You should see it displayed on the Agents table. 
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 items-start">
        <h4 className="text-2xl font-semibold flex items-center gap-x-2">
          <VideoIcon className="size-6" />
          Step 2: Create a Meeting
        </h4>
        <p className="text-base text-neutral-700">
          Once your agent is ready, let’s create a <span className="font-semibold text-black">meeting</span> to interact with it:
        </p>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            1. Go to the Meetings Page
          </h5>

          <p className="text-base text-neutral-700">
            Head to the{" "}
            <Link
              href="/meetings"
              className="font-semibold text-black underline"
              target="_blank"
            >
              meetings
            </Link>{" "}
            section in the app.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            2. Click &quot;New Meeting&quot;
          </h5>

          <p className="text-base text-neutral-700">
            Press the{" "}
            <span className="font-semibold text-black">+ New Meeting</span> button
            to open the meeting creation form.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            3. Name Your Meeting
          </h5>

          <p className="text-base text-neutral-700">
            Give your meeting a{" "}
            <span className="font-semibold text-black">name</span> to help you
            remember it later. We are going to use the name{" "}
            <span
              className="font-semibold text-black cursor-pointer"
              onClick={() => copyToClipboard(MEETING_NAME)}
            >
              &quot;{MEETING_NAME}&quot;
            </span>{" "}
            in this example.
          </p>
        </div>
        
        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            4. Select the Agent
          </h5>

          <p className="text-base text-neutral-700">
            Choose the chef agent you created earlier.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            5. Click &quot;Create&quot;
          </h5>

          <p className="text-base text-neutral-700">
            All set! You will now be redirected to the Meeting page so you can start your call.
          </p>
        </div>
        
        <div className="flex flex-col gap-y-2 w-full border rounded-lg p-4 bg-background">
          <h5 className="text-xl font-semibold flex items-center gap-x-2">
            6. Click &quot;Start meeting&quot;
          </h5>

          <p className="text-base text-neutral-700">
            The video call begins, and your chef is ready to help! 
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 items-start bg-linear-to-br from-[#5D38C3] to-[#3B1E77] rounded-lg p-4 text-white">
        <h4 className="text-2xl font-semibold flex items-center gap-x-2">
          <CircleCheckBigIcon className="size-6" />
          You are Ready to Cook!
        </h4>
        <p className="text-base text-neutral-200">
          You can ask questions, request substitutions, and get real-time help as you cook. Enjoy your meal and the power of Thinki!
        </p>
      </div>
    </div>
  );
};
