# Introduction

**Hermes** - is a JavaScript engine made by Meta (Facebook).
React Native uses it to:

make apps start faster\
reduce memory usage\
improve performance\
Instead of running raw JS like V8 or JSC, Hermes:
👉 converts JS into bytecode
👉 and runs that bytecode inside the app

What happens when app is built with Hermes?

JS bundle → compiled into Hermes bytecode

Stored inside APK / AAB

When decompiled, you don’t see clean JS anymore
You see:

registers

instructions like: LoadConst, Call, Jump

low-level logic

So:
❌ not readable like normal JS
✅ looks like assembly-style logic

How to understand decompiled Hermes code?

Mindset:

- “I am not reading JavaScript anymore, I am reading program behavior.”

Steps:

- Find function boundaries
- Look for function names or labels
- Track variables / registers
    - Example: r0, r1, r2
- Map common patterns
- LoadConst → load value
- Call → function call
- Jump / JmpTrue → if/else
- Reconstruct logic
- Convert instruction flow back to:
- conditions
- loops
- API calls
- Look for strings
- URLs, API endpoints, error messages
    - → very useful for security analysis

✅ Why is Hermes decompiled?

**Common reasons**:
- reverse engineering
- malware analysis
- security audit
- protecting IP
- cheating detection

**Hermes makes reverse engineering:**
- ✔ harder than plain JS
- ❌ but still possible


Public Speaking Script (English)

You can read this directly or memorize parts of it.

🎤 Title: Understanding React Native Hermes and Decompiled Code

Good day everyone.

Today, I will talk about React Native Hermes and how we can understand decompiled Hermes code.

First, what is Hermes?

Hermes is a JavaScript engine developed by Meta for React Native.
Its main goal is to improve performance, reduce memory usage, and make mobile apps start faster.

Unlike traditional JavaScript engines that execute raw JavaScript code, Hermes compiles JavaScript into something called bytecode.
This bytecode is then executed directly by the Hermes engine inside the mobile application.

Because of this process, the original JavaScript code is no longer stored in a readable format when the app is built.
Instead of normal JavaScript, we get low-level instructions that look similar to assembly code.

Now, what happens when we decompile a Hermes-based application?

When an APK or AAB file is decompiled, we do not see the original JavaScript source code.
We see Hermes bytecode instructions such as LoadConst, Call, Jump, and Move.
These instructions represent how the program works internally.

So, how do we understand decompiled Hermes code?

The first step is to identify functions and their boundaries.
This helps us know where one logic block starts and ends.

Next, we track registers or variables such as r0, r1, and r2.
These registers temporarily store values during execution.

Then, we look for patterns.
For example, a sequence of Jump instructions usually represents an if or else condition.
A repeated Jump can indicate a loop.
A Call instruction often means a function call.

Another important technique is to search for readable strings.
Strings like API URLs, error messages, or feature names can give strong clues about what the function is doing.

Instead of trying to read it as JavaScript, we should think of it as analyzing program behavior.
We are not translating line by line.
We are reconstructing logic.

Why is Hermes used and analyzed this way?

Hermes helps protect source code by making it harder to reverse engineer.
It also improves app performance.
However, for security researchers and analysts, decompiling Hermes bytecode is useful for malware analysis, security auditing, and understanding how an application works internally.

In conclusion, Hermes changes JavaScript into bytecode to make React Native apps faster and more efficient.
When we decompile it, we do not get JavaScript anymore, but low-level instructions.
To understand it, we must analyze patterns, control flow, and strings, and rebuild the logic in our mind.

Thank you.