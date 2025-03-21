import NextAuth from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"
import NaverProvider from "next-auth/providers/naver"
import GoogleProvider from "next-auth/providers/google"
import { supabase } from "@/lib/supabase"

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      // 로그인 성공 후 /auth/callback으로 리다이렉트
      return `${baseUrl}/auth/callback`
    },
    async session({ session }) {
      return session
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        // Supabase에 사용자 정보 저장
        const { data: existingUser } = await supabase
          .from('users')
          .select()
          .eq('email', user.email)
          .single()

        if (!existingUser) {
          const { error } = await supabase
            .from('users')
            .insert([
              {
                email: user.email,
                name: user.name,
                image: user.image,
                provider: account.provider,
                provider_id: user.id,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              }
            ])

          if (error) {
            console.error('Error saving user to Supabase:', error)
          }
        }

        return {
          ...token,
          accessToken: account.access_token,
          userId: user.id,
          user: user,
        }
      }
      return token
    },
  },
})

export { handler as GET, handler as POST } 