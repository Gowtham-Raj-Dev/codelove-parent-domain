import type { Article } from "./data";

/*
 * Guides and blog posts for the newer CodeLove products: Video Cut, Video Maker,
 * UTubeFlow, JavaPlay and 3D Games. Section pictures are real screenshots of the
 * live sites (public/images/screens); covers are the product mockups.
 */

export const newArticles: Article[] = [
  {
    slug: "how-to-cut-a-long-video-into-youtube-shorts",
    title: "How to Cut a Long Video into YouTube Shorts (Free, in Your Browser)",
    excerpt:
      "Turn one long video into a week of Shorts: split it into 30-second 9:16 clips, keep the right audio language and download them all as one ZIP — no upload, no watermark.",
    category: "YouTube & Shorts",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Nov 6, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-rose-600",
    icon: "scissors",
    featured: true,
    image: "/images/screens/videocut-1.jpg",
    intro:
      "A podcast, a stream or a long tutorial already holds a dozen good Shorts. The hard part is the cutting: opening a heavy editor, framing every clip for a phone screen and exporting them one by one. Video Cut does that whole job in a browser tab, for free.",
    takeaways: [
      "Split by time (15, 30, 45 or 60-second Shorts) or into equal parts.",
      "9:16 framing with a blurred background keeps landscape footage sharp.",
      "Pick the Tamil, Telugu, Hindi or English audio track when a file has several.",
      "Every clip downloads in one ZIP — or goes straight to UTubeFlow to schedule.",
    ],
    content: [
      {
        heading: "Step 1 — Open the video",
        image: "/images/screens/videocut-2.jpg",
        paragraphs: [
          "Open videocut.codelove.in and press Open VideoCut Studio. Choose any MP4, WebM, MOV or MKV file from your computer — up to 4K. The file is read by your own browser; it is never uploaded to a server, so even a large file opens in seconds.",
          "The studio shows the video on top and a filmstrip timeline at the bottom. Space plays and pauses, S splits at the playhead, and I / O set the start and end of a trim.",
        ],
      },
      {
        heading: "Step 2 — Choose how to cut",
        paragraphs: [
          "Under Shorts clips, pick a length: 30 seconds is the sweet spot for most channels, 60 seconds for explainers. Under Equal parts, choose how many pieces you want — a 20-minute video in 2 parts gives two 10-minute halves for regular YouTube uploads.",
          "Every part appears in the list with its own preview, so you can drop the weak ones or adjust a cut point before exporting.",
        ],
      },
      {
        heading: "Step 3 — Frame it for a phone",
        paragraphs: [
          "Shorts and Reels are vertical. Video Cut gives you three ways to fit a landscape video into 9:16: Blur fill (the video stays sharp in the middle and a soft, enlarged copy fills the top and bottom), Crop (a full-bleed centre crop) and Letterbox (clean solid bars).",
          "If you keep the original shape, the video stream is copied losslessly without re-encoding, which usually takes about a second. Vertical formats are drawn at 1080p with a high bitrate.",
        ],
      },
      {
        heading: "Step 4 — Pick the audio, add text and music",
        paragraphs: [
          "Dubbed films and shows often carry several audio tracks. Video Cut lists every track in an MP4 or MKV file — Tamil, Telugu, Hindi, English — and lets you hear each one live. Your exported clips keep only the track you choose.",
          "From the side rail you can also add a title or caption, background music, colour filters and speed changes before you export.",
        ],
      },
      {
        heading: "Step 5 — Download or schedule",
        paragraphs: [
          "Press Export and every selected part downloads together in one neatly named ZIP, with no watermark. If you use UTubeFlow, press Send to UTubeFlow instead: the clips land in your upload list already titled Part 1, Part 2… and can be scheduled one per day without downloading a single file.",
        ],
      },
    ],
  },
  {
    slug: "landscape-video-to-vertical-shorts-blur-crop-letterbox",
    title: "Landscape to Vertical: Blur Fill vs Crop vs Letterbox for Shorts",
    excerpt:
      "Three ways to fit a 16:9 video into a 9:16 Short — when each one looks best, and how to switch between them in one click.",
    category: "YouTube & Shorts",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Nov 8, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-rose-600",
    icon: "smartphone",
    image: "/images/screens/videocut-1.jpg",
    intro:
      "Most of the footage we already own is wide: screen recordings, interviews, gameplay, phone videos shot sideways. Shorts, Reels and TikTok want a tall 9:16 frame. There are three honest ways to bridge that gap, and each suits a different kind of clip.",
    takeaways: [
      "Blur fill keeps the whole picture and looks native on Shorts.",
      "Crop fills the screen but cuts the sides — best for a single centred subject.",
      "Letterbox keeps everything with plain bars — best for text and slides.",
      "Original mode copies the video losslessly when you don't need 9:16.",
    ],
    content: [
      {
        heading: "Blur fill — the Shorts look",
        paragraphs: [
          "The original video sits sharp in the middle of the frame, and an enlarged, softly blurred copy of the same video fills the space above and below it. Nothing is cut away, and the frame never looks empty.",
          "Use it for talking heads filmed wide, gameplay, tutorials and anything where the edges of the picture matter. It is the default in Video Cut because it works for almost every clip.",
        ],
      },
      {
        heading: "Crop — fill the screen",
        paragraphs: [
          "Crop zooms into the centre of the video until it fills the whole vertical frame. The result feels immersive, but the left and right sides are gone — roughly two thirds of a 16:9 picture.",
          "It works when one subject stays in the centre: a single speaker, a product on a table, a dancer. It fails for two people talking side by side.",
        ],
      },
      {
        heading: "Letterbox — keep every pixel, plainly",
        paragraphs: [
          "Letterbox places the full video in the middle with solid bars above and below. It is the most neutral option and the right one for slides, code, charts and anything with text near the edges.",
          "The empty bars are a good place for a title: add one from the Text tab in Video Cut and it stays on every clip.",
        ],
      },
      {
        heading: "Try all three on the same clip",
        image: "/images/screens/videocut-2.jpg",
        paragraphs: [
          "In Video Cut the frame style is one button — Change frame — so you can preview Blur fill, Crop, Letterbox and Original on your own footage before exporting. Everything happens in your browser, so switching styles is instant and nothing is uploaded.",
        ],
      },
    ],
  },
  {
    slug: "how-to-make-an-ai-cartoon-video-from-a-script",
    title: "How to Make an AI Cartoon Video from a Script (Free)",
    excerpt:
      "Write a dialogue, pick cartoon characters, and get a talking video with AI voices, lip sync, captions and music — exported as an MP4 for Shorts, Reels and YouTube.",
    category: "YouTube & Shorts",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "Nov 13, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-amber-500",
    icon: "sparkles",
    featured: true,
    image: "/images/screens/videomaker-1.jpg",
    intro:
      "Funny family dialogues, classroom jokes and two-line punchlines do very well as Shorts — but animating them used to take hours. Video Maker turns a typed script into a talking cartoon video in a few minutes, right in your browser.",
    takeaways: [
      "One line per turn: Name (mood): words.",
      "66 characters in two drawing styles, each with its own voice.",
      "AI voices come from Google Gemini through your own free key.",
      "Export an MP4 up to 4K with no watermark, or send it to UTubeFlow.",
    ],
    content: [
      {
        heading: "Step 1 — Write the script",
        image: "/images/screens/videomaker-2.jpg",
        paragraphs: [
          "Open videomaker.codelove.in/editor. The Script tab holds the dialogue, one line per turn, written as Name (mood): words — for example Meena (happy): Amma, I came first in class! Moods change the face: happy, sad, shocked, angry, proud, deadpan and sleepy.",
          "A line like [bg: classroom] changes the place mid-video, and [pause: 1.5] adds a dramatic pause before the next line. The last line is treated as the punchline: the camera pushes in and the others react.",
        ],
      },
      {
        heading: "Step 2 — Cast the characters",
        paragraphs: [
          "Every name in the script gets a character automatically. Amma, Appa, Thatha, Chintu, Meena, a Teacher, a Doctor, an auto Driver and many more are ready — 66 in all, in a bold Classic style and a deadpan Slim style. Open the Cast tab to swap a character or pick a different voice for anyone.",
          "Prefer no characters? Switch the video type to Text only: the same script becomes big word-by-word captions on a plain screen — ideal for quotes, facts and story narration.",
        ],
      },
      {
        heading: "Step 3 — Add the voices",
        paragraphs: [
          "Voices are made by Google Gemini with your own free API key (create one in Google AI Studio in about a minute — no card needed). Press play and every line is recorded, the mouths move with the real sound, and background music and sound effects play underneath.",
          "Recorded lines are kept in your browser, so changing a colour or a caption never spends your key's free limit again — and editing one line only records that line.",
        ],
      },
      {
        heading: "Step 4 — Adjust it on the timeline",
        paragraphs: [
          "Click any line on the timeline to edit it: who says it, the mood, the words, the subtitle, or the pause before it. Move lines earlier or later, duplicate or delete them. Scene and music bars open their own settings, and you can use your own background video or your own music track.",
        ],
      },
      {
        heading: "Step 5 — Export",
        paragraphs: [
          "Choose 9:16 for Shorts and Reels, 16:9 for YouTube or 1:1 for posts, then export an MP4 at 720p, 1080p, 1440p or 4K — free and without a watermark. One more button sends the finished video to UTubeFlow to schedule it on your channel.",
        ],
      },
    ],
  },
  {
    slug: "write-ai-video-scripts-in-tamil-tanglish-hindi",
    title: "AI Video Scripts in Tamil, Tanglish, Hindi or English — Done Right",
    excerpt:
      "Pick the voice language first, let AI write the dialogue (Gemini or any AI you like), and check every line before a single second of voice is recorded.",
    category: "YouTube & Shorts",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Nov 16, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-amber-500",
    icon: "fileText",
    image: "/images/screens/videomaker-2.jpg",
    intro:
      "A voice reads exactly what is written. Give a Tamil voice a line in English letters and it sounds like broken English; let an AI pick odd names and a mother ends up calling her son 'Machan'. Here is how Video Maker's AI script writer avoids both.",
    takeaways: [
      "Choose the voice language before writing: Tamil, Tanglish, English, Hindi, Hinglish or Telugu.",
      "Tanglish = Tamil voice with English-letter subtitles, written as spoken | caption.",
      "The AI casts people who fit the story and talks like real family and friends.",
      "You check, edit and confirm the script — nothing changes until you say so.",
    ],
    content: [
      {
        heading: "Language first",
        paragraphs: [
          "Open Write with AI in the Script tab. The first question is the voice language. Tamil means Tamil voice and Tamil subtitles; Tanglish means a Tamil voice with subtitles in English letters; Hinglish does the same for Hindi; English, Hindi and Telugu use their own scripts for both.",
          "For the mixed languages each line carries two versions: spoken words | subtitle words. The voice reads the part before the bar, the caption shows the part after it.",
        ],
      },
      {
        heading: "A cast that makes sense",
        paragraphs: [
          "Describe the idea in one sentence — for example, a boy explains to his mother why he got zero in maths. The AI is told who each character is (Amma is a mother, Chintu a small boy, Machan a goofy friend) and picks the ones that fit the story. It also follows a simple rule: people talk the way real people in that relationship would, so a parent never calls their child 'Machan'.",
          "Prefer your current characters? Choose Keep current cast and the AI writes only for them.",
        ],
      },
      {
        heading: "Gemini, or any AI you like",
        paragraphs: [
          "With a free Gemini key the script appears line by line as it is written. No key, or prefer ChatGPT or Claude? Choose Copy & paste: copy the ready-made prompt, paste it into any AI, then paste its whole reply back. The extra chatter, numbering, bold names and quotes are cleaned up automatically.",
        ],
      },
      {
        heading: "Check before you make",
        paragraphs: [
          "The script is never used straight away. It opens in a Check the script view showing every line, who plays whom and the title. If a line is not in the chosen language — say a Tanglish sentence in a Tamil video — it is flagged, and Fix with Gemini rewrites just those lines in the right letters.",
          "When it reads well, press Make it with voice: the voices are recorded and the video plays. Or press Use script to keep editing first.",
        ],
      },
    ],
  },
  {
    slug: "how-to-schedule-youtube-shorts-in-bulk-for-free",
    title: "How to Schedule YouTube Videos and Shorts in Bulk — for Free",
    excerpt:
      "Upload a whole folder of Shorts once and let them go live one by one at your best times — even with your PC switched off.",
    category: "YouTube & Shorts",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "Oct 22, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-red-500 to-rose-600",
    icon: "youtube",
    featured: true,
    image: "/images/screens/utubeflow-1.jpg",
    intro:
      "Posting every day is what grows a channel, and it is also what burns creators out. Batch your work instead: make a week of Shorts on Sunday, upload them all at once, and let them publish on their own. UTubeFlow does this for free.",
    takeaways: [
      "Add 100 videos at once — titles come from the file names.",
      "Smart daily time slots: every new video takes the next free slot.",
      "Autopilot uploads from your own Google account, even with your PC off.",
      "Free: it runs on your own free Google Cloud project, Drive and YouTube quota.",
    ],
    content: [
      {
        heading: "One-time setup (about 10 minutes)",
        image: "/images/screens/utubeflow-1.jpg",
        paragraphs: [
          "Sign in to utubeflow.codelove.in with Google. The setup guide walks you through creating a free Google Cloud project and pasting its Client ID — every step has a direct link, in English and Tamil. Using your own project means your channel gets its own daily YouTube quota that you never share with anyone.",
          "Then turn on Autopilot: allow Google Drive, click Create, then Activate. UTubeFlow sets everything up inside your own account.",
        ],
      },
      {
        heading: "Pick your time slots",
        paragraphs: [
          "In Settings choose the times your audience is online — for example 8 AM, 1 PM and 6:30 PM. Every video you add takes the next free slot automatically, so you never juggle a calendar.",
          "YouTube's free API quota allows about six uploads a day, so 100 Shorts at three a day go out over about a month without you touching anything.",
        ],
      },
      {
        heading: "Add the videos",
        image: "/images/screens/utubeflow-3.jpg",
        paragraphs: [
          "Open Upload Shorts or Upload Videos and select a whole folder. Titles are filled in from the file names; edit them in a list, add descriptions and tags, then add them all with one click. UTubeFlow checks each Short's shape and length and adds #Shorts for you. Long videos can carry a custom thumbnail.",
        ],
      },
      {
        heading: "Close the laptop",
        paragraphs: [
          "Keep the tab open only while files are copied to your Google Drive. After that, a small script in your own Google account checks every 30 minutes and uploads each video before its time, booked as scheduled on YouTube. It goes live at the exact minute — with your PC off.",
          "Need content first? VideoCut and Video Maker are built into UTubeFlow: cut a long video into Shorts or make a cartoon video, and the clips land in Ready to Post.",
        ],
      },
    ],
  },
  {
    slug: "from-one-long-video-to-a-month-of-scheduled-shorts",
    title: "From One Long Video to a Month of Scheduled Shorts",
    excerpt:
      "A free, browser-only workflow: cut with Video Cut, make extra cartoon Shorts with Video Maker, and schedule everything with UTubeFlow — without downloading a single file.",
    category: "YouTube & Shorts",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Nov 16, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-red-500 to-orange-600",
    icon: "workflow",
    image: "/images/screens/utubeflow-2.jpg",
    intro:
      "Three CodeLove tools fit together into one content pipeline. Each is free on its own; together they take you from a single recording to a month of daily uploads in an afternoon.",
    takeaways: [
      "Video Cut and Video Maker open right inside UTubeFlow.",
      "Finished clips go to Ready to Post — no downloads, no re-uploads.",
      "Schedule one per day or at your own time slots.",
      "Everything is processed in your browser and your own Google account.",
    ],
    content: [
      {
        heading: "1. Cut the long video",
        paragraphs: [
          "In UTubeFlow open VideoCut from the sidebar. Load your podcast or stream, choose 30-second Shorts with Blur fill, pick the audio language and preview the parts. Press the send button and every clip lands in Ready to Post, titled Part 1, Part 2 and so on.",
        ],
      },
      {
        heading: "2. Add a few cartoon Shorts",
        paragraphs: [
          "Mix in variety: open Video Maker from the same sidebar, let the AI write a short funny dialogue in your language, check it, and make it with voice. Add to Ready to Post sends the MP4 with its title and description.",
        ],
      },
      {
        heading: "3. Schedule the batch",
        paragraphs: [
          "Open Ready to Post, review titles and descriptions, and press Schedule. Each video takes your next free time slot. Autopilot uploads them from your Google Drive on time, every day, with your PC off.",
          "Repeat once a month and your channel posts daily without you thinking about it.",
        ],
      },
    ],
  },
  {
    slug: "how-to-play-old-java-phone-games-on-android-and-pc",
    title: "How to Play Old Java Phone Games on Android and PC",
    excerpt:
      "Bounce, Diamond Rush, Total Conquest… Play classic J2ME .jar games again with a real phone keypad — in your browser, a 245 KB Android app or on Windows.",
    category: "Games",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 22, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-emerald-500 to-teal-600",
    icon: "smartphone",
    featured: true,
    image: "/images/screens/javaplay-1.jpg",
    intro:
      "Before app stores there were Java games: tiny .jar files for Nokia, Sony Ericsson and Samsung phones, played with a keypad. Modern phones cannot run them — JavaPlay can, with the same soft keys, D-pad and number keys.",
    takeaways: [
      "163 free open-license Java games, playable in one tap.",
      "Open any .jar you already own — .jad files alone don't contain the game.",
      "Auto screen size from 128×128 to 480×800, portrait or landscape.",
      "Record gameplay videos with the game's music.",
    ],
    content: [
      {
        heading: "Get JavaPlay",
        image: "/images/screens/javaplay-1.jpg",
        paragraphs: [
          "On Android, download the JavaPlay app from javaplay.codelove.in (about 245 KB). JavaPlay is not on the Play Store, so Android asks you to allow installs from your browser — the app needs no account, shows no ads and asks for no permissions except vibration. On a computer, use Play in browser or the Windows app.",
        ],
      },
      {
        heading: "Pick a game",
        image: "/images/screens/javaplay-2.jpg",
        paragraphs: [
          "The Free games library holds 163 openly licensed Java games hosted by JavaPlay — puzzles, arcade, racing and more. Tap one to play. To play a game you already own, tap + Add game and pick its .jar file. If a game offers several screen sizes, 240×320 is usually the best choice.",
        ],
      },
      {
        heading: "Controls that feel like the phone",
        paragraphs: [
          "A real keypad sits under the game: two soft keys, a D-pad with OK, and 0–9 with * and #. Every key sends the same code an old Nokia would. Many games also move with 2, 4, 6 and 8 and fire with 5. In the browser, use the arrow keys, Enter for OK, F1 and F2 for the soft keys and Esc for the menu.",
          "Touch-screen Java games hide the keypad and fill the screen. Games that draw sideways are turned upright automatically.",
        ],
      },
      {
        heading: "If a game looks wrong",
        paragraphs: [
          "Open the ☰ menu while playing: Screen size changes the resolution, Rotate screen turns a sideways game upright, and JavaPlay remembers the choice for that game. JavaPlay supports 2D games for MIDP 1.0/2.0 and the Nokia UI API; 3D (M3G, Mascot Capsule) and online features are not supported yet.",
          "Only play games you have the right to use — JavaPlay does not host or sell commercial titles.",
        ],
      },
    ],
  },
  {
    slug: "free-3d-browser-games-no-download",
    title: "Free 3D Browser Games You Can Play Without Downloading",
    excerpt:
      "Kart racing, skating, tower defense, stealth, mini golf and a Chettinad horror puzzle — 14 free 3D games that start in a browser tab on PC or phone.",
    category: "Games",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Nov 1, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-amber-500 to-orange-600",
    icon: "play",
    image: "/images/screens/games-1.jpg",
    intro:
      "Not every game needs a 50 GB install. CodeLove Games is a collection of free 3D games that load in seconds in your browser, with keyboard, mouse or touch — and no sign-up.",
    takeaways: [
      "14 games in 14 genres, free and with no download.",
      "Works on PC and phone; two games also have an Android app.",
      "Every game is built from models in the CodeLove 3D library.",
      "Each game page has a trailer, the controls and how to play.",
    ],
    content: [
      {
        heading: "What you can play",
        image: "/images/screens/games-1.jpg",
        paragraphs: [
          "Turbo Karts (drift and boost across 9 circuits, with online races), Skate Rush (an endless city skater), Saucer Siege (tower defense against flying saucers), Crypt Knight (an action roguelite), Night Heist (stealth: slip past guards, cameras and lasers), Putt Paradise (nine dreamy mini-golf holes) and Patti Veedu, a five-night horror puzzle in a Chettinad mansion where you listen for grandma's anklet bells.",
          "There is also Kingdom Clash for village-building strategy, Cannon Cove for naval trading, Order Up! for burger-cooking time management, Hex Haven for relaxed tile puzzles, Sky Hop for platforming, Siege Smash for physics and Beat Street for rhythm.",
        ],
      },
      {
        heading: "How to start",
        image: "/images/screens/games-2.jpg",
        paragraphs: [
          "Open games.codelove.in, pick a game and press Play. Each game has its own page with a short trailer, the controls and tips. On a phone the games switch to touch controls; on a PC use the keyboard and mouse.",
          "Patti Veedu and Kingdom Clash are also available as a free Android app, with more apps on the way.",
        ],
      },
      {
        heading: "Built from a free model library",
        paragraphs: [
          "Every game is made only from models in the CodeLove 3D Models library — 859 models across 50 model packs so far. If you make games yourself, you can download the same GLB models for free at models.codelove.in.",
        ],
      },
    ],
  },
];

export const newBlogs: Article[] = [
  {
    slug: "video-maker-november-update",
    title: "Video Maker Update: AI Scripts You Check First, Timeline Editing and Your Own Media",
    excerpt:
      "Pick the voice language, let AI write the script, confirm it, then fine-tune any line on the timeline — with your own background video and music.",
    category: "Updates",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Nov 16, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-amber-500",
    icon: "sparkles",
    featured: true,
    image: "/images/screens/videomaker-2.jpg",
    intro:
      "Video Maker got its biggest update since launch. Most of it came from creators making Tamil and Tanglish Shorts every day — thank you for the feedback.",
    takeaways: [
      "Voice language first, and every line checked against it",
      "Check the script before anything is made",
      "Click a line on the timeline to edit it",
      "Your own background video and music, kept in your browser",
    ],
    content: [
      {
        heading: "AI scripts that sound right",
        paragraphs: [
          "Write with AI now starts with the voice language — Tamil, Tanglish, English, Hindi, Hinglish or Telugu. The AI picks characters who fit your idea and talks the way real families and friends do. If a line comes back in the wrong letters, it is flagged and Fix with Gemini rewrites it.",
          "No Gemini key? Copy the prompt into ChatGPT, Claude or any AI and paste the reply back; it is cleaned up for you.",
        ],
      },
      {
        heading: "Nothing changes until you confirm",
        paragraphs: [
          "A new Check the script step shows every line, the title and who plays whom. Edit anything, write again, or press Make it with voice when it reads well.",
        ],
      },
      {
        heading: "Edit the video like an editor",
        paragraphs: [
          "Click any clip on the timeline to change the words, the speaker, the mood, the subtitle or the pause before it — or move, duplicate and delete lines. Only the lines you change are recorded again, so your Gemini key's free limit lasts much longer, and voices you already recorded come back after a reload.",
          "Scene → Video uses your own clip as the background, with its own sound and a start point. Audio → Add your own music lets you choose where the track starts, and music can now get quieter while someone speaks.",
        ],
      },
      {
        heading: "Inside UTubeFlow",
        paragraphs: [
          "Video Maker inside UTubeFlow now follows UTubeFlow's light or dark theme and fills the screen like an app. Finished videos go straight to Ready to Post.",
        ],
      },
    ],
  },
  {
    slug: "introducing-video-maker",
    title: "Introducing Video Maker: Script to Talking Cartoon Video, Free",
    excerpt:
      "Type a dialogue and 66 cartoon characters act it out with AI voices, lip sync, captions and music. Tamil, Hindi, Telugu and English. No watermark.",
    category: "Announcements",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Nov 12, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-amber-500",
    icon: "sparkles",
    featured: true,
    image: "/images/screens/videomaker-1.jpg",
    intro:
      "CodeLove's newest product turns writing into video. If you can type a funny two-person conversation, you can now publish it as an animated Short.",
    takeaways: ["66 characters, 30 voices", "Lip sync from the real sound", "Text-only caption videos", "MP4 up to 4K, no watermark"],
    content: [
      {
        heading: "What it does",
        image: "/images/screens/videomaker-1.jpg",
        paragraphs: [
          "Write one line per turn and Video Maker builds the scene: characters stand on a set, the speaker's mouth follows the actual voice, word-by-word captions pop on screen and music and sound effects play underneath. The last line lands as a punchline with a camera push and reactions.",
          "Text-only mode skips the characters and shows big captions on a plain screen — handy for facts, quotes and stories.",
        ],
      },
      {
        heading: "Your key, your browser",
        paragraphs: [
          "Everything runs in your browser. The AI voices use Google Gemini through your own free API key, which stays on your device and allows several videos a day. There is no sign-up and no watermark.",
        ],
      },
      {
        heading: "Made for Shorts",
        paragraphs: [
          "Export 9:16 for Shorts and Reels, 16:9 for YouTube or 1:1 for posts, then send the video straight to UTubeFlow to schedule it. Open it at videomaker.codelove.in.",
        ],
      },
    ],
  },
  {
    slug: "introducing-video-cut",
    title: "Introducing Video Cut: Split Long Videos into Shorts in Your Browser",
    excerpt:
      "A free video shorts cutter: 30-second 9:16 clips with a blurred background, multi-audio tracks, text and music — downloaded as one ZIP, never uploaded.",
    category: "Announcements",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Nov 5, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-orange-500 to-rose-600",
    icon: "scissors",
    featured: true,
    image: "/images/screens/videocut-1.jpg",
    intro:
      "Repurposing a long video into Shorts is one of the best ways to grow a channel, and one of the most tedious. Video Cut makes it a two-minute job.",
    takeaways: ["Equal parts or timed Shorts", "Blur fill, crop or letterbox", "Pick the audio language", "One ZIP, no watermark"],
    content: [
      {
        heading: "Cut, frame and export in one place",
        image: "/images/screens/videocut-2.jpg",
        paragraphs: [
          "Load an MP4, WebM, MOV or MKV file up to 4K, choose equal parts or 15–60-second Shorts, pick a 9:16 frame style and the audio track to keep, and export every part in a single ZIP. Text, music, colour and speed are one tap away in the side rail.",
        ],
      },
      {
        heading: "Private by design",
        paragraphs: [
          "Cutting, framing and packaging happen inside your browser, so your videos never touch a server. In Original mode the video is copied losslessly in about a second.",
        ],
      },
      {
        heading: "Straight to YouTube scheduling",
        paragraphs: [
          "Video Cut connects to UTubeFlow: one click sends every clip, already titled, into your upload list, where it can be scheduled one per day. Try it at videocut.codelove.in.",
        ],
      },
    ],
  },
  {
    slug: "introducing-utubeflow",
    title: "Introducing UTubeFlow: Free YouTube Automation",
    excerpt:
      "Bulk upload and schedule YouTube videos and Shorts, and let Autopilot publish them on time — even with your PC switched off. No paid plans.",
    category: "Announcements",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Oct 20, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-red-500 to-rose-600",
    icon: "youtube",
    featured: false,
    image: "/images/screens/utubeflow-1.jpg",
    intro:
      "Scheduling tools for YouTube usually cost a monthly fee. UTubeFlow is free, because it runs on the free tools Google already gives every creator.",
    takeaways: ["Bulk upload 100 videos", "Smart daily time slots", "Autopilot with your PC off", "₹0 forever"],
    content: [
      {
        heading: "How it stays free",
        image: "/images/screens/utubeflow-3.jpg",
        paragraphs: [
          "UTubeFlow is the control panel; the work happens in your own Google account. Videos wait in a private folder in your Google Drive (15 GB free), and a small Apps Script in your account uploads each one before its time using your own YouTube API quota. There is no CodeLove server holding your videos or passwords.",
        ],
      },
      {
        heading: "Built for batch creators",
        paragraphs: [
          "Add a whole folder of Shorts at once, edit titles in a list and let each video take the next free time slot. A health check tests YouTube, Drive and Autopilot with one button and says what to fix.",
        ],
      },
      {
        heading: "Studios included",
        paragraphs: [
          "VideoCut and Video Maker now open right inside UTubeFlow, so you can make the content and schedule it in the same place. Start at utubeflow.codelove.in.",
        ],
      },
    ],
  },
  {
    slug: "introducing-javaplay",
    title: "Introducing JavaPlay: Old Java Phone Games, Back in Your Hand",
    excerpt:
      "A J2ME emulator written from scratch: play .jar games in your browser, in a 245 KB Android app or on Windows, with a real phone keypad.",
    category: "Announcements",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Oct 20, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-emerald-500 to-teal-600",
    icon: "smartphone",
    featured: false,
    image: "/images/screens/javaplay-1.jpg",
    intro:
      "Many of us played our first mobile games on a keypad phone. JavaPlay brings those Java games back on today's phones and computers.",
    takeaways: ["163 free open-license games", "Real keypad: soft keys, D-pad, 0–9", "Android, Windows and browser", "No ads, no sign-up"],
    content: [
      {
        heading: "An engine written from scratch",
        image: "/images/screens/javaplay-2.jpg",
        paragraphs: [
          "JavaPlay contains its own Java bytecode virtual machine plus MIDP 2.0 and the Nokia UI API, written from scratch. That is why the Android app is only about 245 KB. It picks the right screen size for each game, turns sideways games upright and keeps your saves and high scores.",
        ],
      },
      {
        heading: "Free games, or your own",
        paragraphs: [
          "Play any of the 163 openly licensed games in the free library, or open a .jar file you already have. You can even record a gameplay video with the game's music from the menu.",
          "Get it at javaplay.codelove.in.",
        ],
      },
    ],
  },
  {
    slug: "fourteen-free-3d-games",
    title: "14 Free 3D Games, Built Entirely from Our Model Library",
    excerpt:
      "Racing, skating, tower defense, stealth, rhythm and a Tamil horror puzzle — all free in the browser, and all made from free CodeLove 3D models.",
    category: "Announcements",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Nov 1, 2026",
    updated: "Nov 16, 2026",
    gradient: "from-amber-500 to-orange-600",
    icon: "play",
    featured: false,
    image: "/images/screens/games-1.jpg",
    intro:
      "The 3D Models library started as a place to download assets. It turned into a test: how many good games can be made using only those free models? The answer so far is fourteen.",
    takeaways: ["14 games, 14 genres", "No download, no sign-up", "PC and phone", "859 library models used"],
    content: [
      {
        heading: "The line-up",
        image: "/images/screens/games-3.jpg",
        paragraphs: [
          "Turbo Karts, Skate Rush, Saucer Siege, Cannon Cove, Crypt Knight, Order Up!, Hex Haven, Sky Hop, Siege Smash, Beat Street, Putt Paradise, Kingdom Clash, Night Heist and Patti Veedu — each with its own page, trailer and controls.",
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          "Four more games are in the works — Castaway, Nova Strike, Sky Courier and Aisle Zero — built the same way. Patti Veedu and Kingdom Clash already have a free Android app, and apps for the others are coming. Play now at games.codelove.in.",
        ],
      },
    ],
  },
];
