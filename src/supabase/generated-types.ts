export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
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
          title: string
        }
        Insert: {
          body: string
          created_at?: string
          description: string
          id?: number
          title: string
        }
        Update: {
          body?: string
          created_at?: string
          description?: string
          id?: number
          title?: string
        }
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
