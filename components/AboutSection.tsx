"use client";

import { Cake, Contact, GraduationCap, Mail, Phone, Building2, BadgeCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section min-h-[68svh] scroll-mt-24 md:min-h-[74svh]">
      <div className="container space-y-6">
        <div>
          <h2 className="text-2xl font-medium md:text-3xl">About</h2>
          <p className="mt-2 text-sm text-zinc-400">기본 프로필과 연락 정보를 확인할 수 있습니다.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="glass-card p-6 md:p-8">
            <h3 className="inline-flex items-center gap-2 text-xl font-medium">
              <Contact size={18} className="text-primary" />
              Profile
            </h3>
            <ul className="mt-5 space-y-3 text-zinc-200">
              <li className="flex items-center gap-2">
                <Cake size={16} className="text-primary" />
                1997년 05월 31일 출생
              </li>
              <li className="flex items-center gap-2">
                <Building2 size={16} className="text-primary" />
                (주) 쿨스 (2024-01-02 ~ 재직중)
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={16} className="text-primary" />
                방통대 컴퓨터 공학과 4학년 재학중
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-primary" />
                정보처리기사 1차합격
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap size={16} className="mt-1 text-primary" />
                NCS기반 [K-디지털사업] 자바&Springboot 크로스 플랫폼(풀스택) 융합 응용SW개발자 양성과정
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h3 className="inline-flex items-center gap-2 text-xl font-medium">
              <Contact size={18} className="text-primary" />
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-zinc-200">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                qkralsgml24@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                010-8742-2845
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
