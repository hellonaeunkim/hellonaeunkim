import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `

<div align= "center">
<a href="https://github.com/devxb/gitanimals">
<img
  src="https://render.gitanimals.org/farms/hellonaeunkim"
  width="600"
  height="300"
/>
</a>
 </div>

<div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 💻 Languages </h2> <br>
    <div style="margin: 0 auto; text-align: center;" align= "center">
          <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white">
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white">
          <img src="https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white"/>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
          </div>
    </div>

   <div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🖼️ Frameworks </h2> <br>
    <div style="margin: 0 auto; text-align: center;" align= "center">
          <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
          <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white">
          <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white">
          <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
          </div>
    </div>


<div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 📚 Tech Stacks </h2> <br>
    <div style="margin: 0 auto; text-align: center;" align= "center">
          <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
          <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=Thymeleaf&logoColor=white">
          <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white">
          <img src="https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=JUnit5&logoColor=white">
          <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white">
          <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
          <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white"/>
          </div>


  <div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🛠️ Tools </h2> <br>
    <div style="margin: 0 auto; text-align: center;" align= "center">
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
          </div>
    </div>


  <div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🏅 Stats </h2> <div align= "center">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hellonaeunkim&layout=compact&bg_color=180,000000,&title_color=000000&text_color=000000"
          /> </div>
    </div>

<div align= "center">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 📕 Latest Blog Posts </h2>
    <div style="display: flex; flex-direction: column; align-items: center; margin: 20px auto;">
</div>


`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://annovation.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `• <a href="${link}" style="text-decoration: none; color: #0366d6; margin: 5px 0;">${title}</a>\n`;
    }

    text += '</div></div>\n';

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();