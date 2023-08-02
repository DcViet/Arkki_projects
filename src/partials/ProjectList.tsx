import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Xem thêm <GradientText>Dự án</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Scrat Journey"
        description="Bài học giúp bạn tiếp cận đến thuật ngữ cơ bản, quan trọng và sử dụng nhiều
        khi nói đến Phát triển game nói riêng và Phát triển phần mềm nói chung 
        (Thuật toán)."
        link="/"
        img={{
          /* src: '/assets/images/project-web-design.png', */
          src: '/assets/images/imgbin_scrat.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Thuật toán</Tags>
            <Tags color={ColorTags.LIME}>Game design</Tags>
            <Tags color={ColorTags.SKY}>Game programing</Tags>
            <Tags color={ColorTags.ROSE}>DucTruong</Tags>
          </>
        }
      />
      <Project
        name="Dancer Party"
        description="Khám phá thế giới kỳ diệu của mã nguồn!  Bất kỳ ai, dù là người mới bắt đầu hay chưa từng tiếp xúc với lập trình, đều có thể tham gia và sáng tạo theo cách riêng của mình. Tại đây, bạn sẽ tìm hiểu cách tạo ra các trò chơi thú vị, ứng dụng hữu ích và thậm chí đưa ra những ý tưởng mới mẻ. Bạn sẽ khám phá một thế giới đầy màu sắc và không giới hạn với mã nguồn!(Event)."
        link="/"
        img={{
          /* src: '/assets/images/project-fire.png', */
          src: '/assets/images/unicorn-dance.png',
          alt: 'Project Fire',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Event</Tags>
            <Tags color={ColorTags.EMERALD}>Game programming</Tags>
            <Tags color={ColorTags.YELLOW}>DucTruong</Tags>
          </>
        }
      />
      <Project
        name="Flappy Bird"
        description="Từ những bước đầu tiên tới sự tinh thông, Flappy Bird là nơi khơi dậy niềm đam mê sáng tạo của các bạn. Bằng cách tận hưởng những event hấp dẫn, các bạn sẽ học cách tạo con chim dễ thương và điều khiển chúng bay qua các ống nước. Nắm vững các event nhấn màn hình, di chuyển và va chạm, bạn sẽ sáng tạo nên trò chơi thú vị và gây nghiện của riêng mình!"
        link="/"
        img={{
          /* src: '/assets/images/project-maps.png', */
          src: '/assets/images/flappy-bird-icon.png',
          alt: 'Project Maps',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flappy Bird</Tags>
            <Tags color={ColorTags.INDIGO}>Game programming</Tags>
            <Tags color={ColorTags.ROSE}>DucTruong</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
