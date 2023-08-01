import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Theo dõi các dự án <GradientText>qua Email</GradientText>
        </>
      }
      description="Các thông báo mới nhất cho các dự án sẽ được gửi vào email của bạn."
    />
  </Section>
);

export { CTA };
