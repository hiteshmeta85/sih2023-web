export interface AvatarIP {
  id: number;
  nickname: string;
  description: string;
  image: string;
  gender: string;
  intro_video: string;
  created_at: string;
}

export interface VideoIP {
  id: number;
  avatar: AvatarIP;
  script: ScriptIP;
  title: string;
  description: string;
  thumbnail: string;
  language: string;
  link: string;
  duration: number;
  status: string;
  created_at: string;
  user: number;
}

export interface ScriptIP {
  id: number;
  script_sections: ScriptSectionsEntity[];
  content: string;
  language: string;
}

export interface ScriptSectionsEntity {
  id: number;
  images: ImagesEntity[];
  content: string;
  start_time: string;
  end_time: string;
  script: number;
}

export interface ImagesEntity {
  id: number;
  link: string;
  source: string;
  source_link: string;
}
