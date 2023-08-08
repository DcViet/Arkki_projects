import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Xin chào, mình là <GradientText>DucTruong</GradientText> 👋
        </>
      }
      description={
        <>
          Đây là trang thông tin chương trình Game design. Chương trình thuộc
          chuỗi Theme course của{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Arkki VN
          </a>{' '}
          .Chương trình gồm{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            20 dự án
          </a>{' '}
          về Game programming và Game development.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar2.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
