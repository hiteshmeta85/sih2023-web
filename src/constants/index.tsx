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

export const PRESS_RELEASE_DATA = [
  {
    id: 1,
    title: "PRESIDENT OF INDIA GRACES INDIA SMART CITIES CONCLAVE 2023",
    link: "https://pib.gov.in/PressReleasePage.aspx?PRID=1961189",
  },
  {
    id: 2,
    title: "PM addresses YouTubers during YouTube Fanfest India 2023",
    link: "https://pib.gov.in/PressReleasePage.aspx?PRID=1961491",
  },
  {
    id: 3,
    title:
      "Prime Minister congratulates Sift Kaur Samra on winning Gold Medal in the 50m Rifle 3 Positions Women’s shooting",
    link: "https://pib.gov.in/PressReleasePage.aspx?PRID=1961471",
  },
];

export const DURATION_OPTIONS = [
  { label: "15 seconds", value: 15 },
  { label: "30 seconds", value: 30 },
  { label: "60 seconds", value: 60 },
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
            link: "/images/avatar_1.jpeg",
            source: "Unsplash",
            source_link: "unsplash.com/link1",
          },
          {
            id: 2,
            link: "/images/avatar_2.jpeg",
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
            link: "/images/avatar_3.jpeg",
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
  thumbnail: "",
  title: "Transforming Press Releases with AI",
  description: "Experience the future of communication.",
  language: "English",
  link: "https://youtu.be/Uzuk4vraXpA?feature=shared",
  duration: 60,
  status: "Completed",
  created_at: "2023-09-24T11:19:34.499367Z",
  user: 1,
};

export const VIDEOS_DATA = [
  {
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
              link: "/images/avatar_1.jpeg",
              source: "Unsplash",
              source_link: "unsplash.com/link1",
            },
            {
              id: 2,
              link: "/images/avatar_2.jpeg",
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
              link: "/images/avatar_3.jpeg",
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
    thumbnail: "",
    title: "Transforming Press Releases with AI",
    description: "Experience the future of communication.",
    language: "English",
    link: "https://youtu.be/Uzuk4vraXpA?feature=shared",
    duration: 60,
    status: "Completed",
    created_at: "2023-09-24T11:19:34.499367Z",
    user: 1,
  },
  {
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
              link: "/images/avatar_1.jpeg",
              source: "Unsplash",
              source_link: "unsplash.com/link1",
            },
            {
              id: 2,
              link: "/images/avatar_2.jpeg",
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
              link: "/images/avatar_3.jpeg",
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
    thumbnail: "",
    title: "Transforming Press Releases with AI",
    description: "Experience the future of communication.",
    language: "English",
    link: "https://youtu.be/Uzuk4vraXpA?feature=shared",
    duration: 60,
    status: "Completed",
    created_at: "2023-09-24T11:19:34.499367Z",
    user: 1,
  },
];

export const ROUTES = [
  { label: "Home", path: "/" },
  { label: "Avatar Showcase", path: "/avatars" },
  { label: "Video Showcase", path: "/videos" },
  { label: "Generate Video", path: "/video-generation" },
  { label: "Generate Avatar", path: "/video-generation/generate-avatar" },
];

export const IMAGE_GALLERY_DATA = [
  {
    id: 1,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/sample/video-generation-prompt-page.png",
  },
  {
    id: 2,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    image: "/sample/select-press-release-link-page.png",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/select-language-page.png",
  },
  {
    id: 4,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/select-duration-page.png",
  },
  {
    id: 5,
    title:
      "CLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/select-avatar-page.png",
  },
  {
    id: 6,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/edit-avatar-page.png",
  },
  {
    id: 7,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/avatar-generation-prompt-page.png",
  },
  {
    id: 8,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/edit-script-page.png",
  },
  {
    id: 9,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/generation-message-page.png",
  },
  {
    id: 10,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/sample/individual-video-page.png",
  },
];

export const DEVELOPER_SECTION_DATA = [
  {
    id: 1,
    name: "Hitesh Meta",
    designation: "Full-Stack Web Developer",
    github_url: "https://github.com/hiteshmeta85",
  },
  {
    id: 2,
    name: "Om Surve",
    designation: "ML Engineer & Backend Developer",
    github_url: "https://github.com/gamingflexer",
  },
  {
    id: 3,
    name: "Kunal Wagh",
    designation: "Data Scientist",
    github_url: "https://github.com/kunalwagh30092002",
  },
  {
    id: 4,
    name: "Shreya Belanekar",
    designation: "Frontend Developer",
    github_url: "https://github.com/ShreyaMBelanekar42",
  },
  {
    id: 5,
    name: "Tanshiq Parkar",
    designation: "Full-Stack Web Developer",
    github_url: "https://github.com/RevTpark",
  },
  {
    id: 6,
    name: "Yash Wakekar",
    designation: "ML Engineer & Backend Developer",
    github_url: "https://github.com/Yash-Wakekar",
  },
];
