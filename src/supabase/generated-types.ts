export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          body: string
          created_at: string
          description: string
          id: number
          published: boolean
          title: string
        }
        Insert: {
          body: string
          created_at?: string
          description: string
          id?: number
          published?: boolean
          title: string
        }
        Update: {
          body?: string
          created_at?: string
          description?: string
          id?: number
          published?: boolean
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
