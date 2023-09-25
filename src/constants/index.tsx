export const LANGUAGES = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
  { label: "Marathi", value: "marathi" },
  { label: "Punjabi", value: "punjabi" },
  { label: "Gujarati", value: "gujarati" },
  { label: "Telugu", value: "telugu" },
  { label: "Kannada", value: "kannada" },
  { label: "Malayalam", value: "malayalam" },
  { label: "Tamil", value: "tamil" },
  { label: "Urdu", value: "urdu" },
  { label: "Odia", value: "odia" },
  { label: "Bengali", value: "bengali" },
  { label: "Assamese", value: "assamese" },
  { label: "Manipuri", value: "manipuri" },
  { label: "Sanskrit", value: "sanskrit" },
];

export const DURATION_OPTIONS = [
  { label: "30 seconds", value: 30 },
  { label: "1 minute", value: 60 },
];

export const AVATAR_OPTIONS = [
  {
    id: 1,
    nickname: "JohnDoe92",
    description:
      "Tech enthusiast and software developer with a passion for AI and machine learning. Exploring the endless possibilities of technology.",
    image: "/images/avatar_1.jpeg",
    gender: "Male",
    intro_video: "video1.mp4",
    created_at: "2023-09-24T10:40:35.269627Z",
  },
  {
    id: 2,
    nickname: "JaneSmith78",
    description:
      "Healthcare professional dedicated to improving patient care and well-being. Advocating for accessible and quality healthcare services.",
    image: "/images/avatar_2.jpeg",
    gender: "Female",
    intro_video: "video2.mp4",
    created_at: "2023-09-25T14:20:45.123456Z",
  },
  {
    id: 3,
    nickname: "TechGeek123",
    description:
      "Passionate about all things tech. Love tinkering with gadgets, coding, and staying up-to-date with the latest tech trends.",
    image: "/images/avatar_3.jpeg",
    gender: "Non-binary",
    intro_video: "video3.mp4",
    created_at: "2023-09-26T18:15:55.987654Z",
  },
];

export const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const VIDEO_DATA = {
  id: 1,
  avatar: {
    id: 1,
    nickname: "AI_Creator",
    description: "Your digital companion created with AI magic.",
    image: "avatar_image.jpg",
    gender: "Neutral",
    intro_video: "intro_video.mp4",
    created_at: "2023-09-24T10:40:35.269627Z",
  },
  script: {
    id: 1,
    script_sections: [
      {
        id: 1,
        images: [
          {
            id: 1,
            link: "image_link1.jpg",
            source: "Unsplash",
            source_link: "unsplash.com/link1",
          },
          {
            id: 2,
            link: "image_link2.jpg",
            source: "Pexels",
            source_link: "pexels.com/link2",
          },
        ],
        content:
          "In today's fast-paced world, we understand the need for concise communication.",
        start_time: "00:00",
        end_time: "00:10",
        script: 1,
      },
      {
        id: 2,
        images: [
          {
            id: 3,
            link: "image_link3.jpg",
            source: "Pixabay",
            source_link: "pixabay.com/link3",
          },
        ],
        content:
          "Our AI-driven solution simplifies the conversion of text to video, engaging your audience effortlessly.",
        start_time: "00:15",
        end_time: "00:25",
        script: 1,
      },
      {
        id: 3,
        images: [],
        content:
          "Join us on this journey to redefine communication with the power of AI avatars.",
        start_time: "00:30",
        end_time: "00:40",
        script: 1,
      },
    ],
    content:
      "Our AI-powered avatars transform text-based Press Releases into engaging videos.",
    language: "English",
  },
  title: "Transforming Press Releases with AI",
  description: "Experience the future of communication.",
  language: "English",
  link: "yourwebsite.com/videos/video1",
  duration: 60,
  status: "Completed",
  created_at: "2023-09-24T11:19:34.499367Z",
  user: 1,
};
