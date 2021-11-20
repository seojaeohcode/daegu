import React from "react";
import './Body.scss'

export function Body() {
  return (
    <section>
      <div class="sec">
        <div class="Largetitle">Attractions in Daegu</div>
        <div class="flexbox">
          <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daegu/blob/main/1.jpg?raw=true" height="800px" /></div>
          <div class="textbox one">
            <div class="textpos">
              <h3>명소1</h3><br />
              <h1>김광석 다시그리기길</h1><br />
              <h2>
              대구 여행에서 빼놓을 수 없는 곳이에요.<br/> 
              대구 출신 가수 김광석(1984~1996)을 추모하여<br/> 
              그가 태어난 대봉동의 방천시장 옆 350m 골목에<br/> 
              그의 삶과 음악을 테마로 조성한 벽화 거리다.<br/>
              김광석의 다양한 모습과 노랫말을 담은<br/> 
              벽화와 조형물을 만날 수 있다.
              </h2>
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="rightimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daegu/blob/main/2.jpg?raw=true" height="800px" /></div>
          <div class="textbox two">
            <div class="textpos">
              <h3>명소2</h3><br />
              <h1>계산성당</h1><br />
              <h2>
              근대문화골목 투어 코스의 한 곳인<br/> 
              계산성당은 서울 명동성당,<br/> 
              전주 전동성당과 함께 우리나라 3대 성당 중 한 곳이다.<br/>
              대구 최초의 서양식 건물로 두 개의 첨탑을 가진<br/>
              고딕 양식의 아름다운 건물이다.
              </h2>
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daegu/blob/main/3.jpg?raw=true" height="800px" /></div>
          <div class="textbox one">
            <div class="textpos">
              <h3>명소3</h3><br />
              <h1>83타워</h1><br />
              <h2>
              달서구 두류동에 위치한 83타워는<br/> 
              202m의 타워 꼭대기가 83층에 해당하여<br/> 
              83타워라 이름 붙여졌다.<br/> 
              1992년에 완공된 전파송출용 탑이나<br/> 
              지금은 전망대, 아이스링크, 갤러리,<br/> 
              음식점이 있는 대구의 랜드마크이다.<br/> 
              123m에서 뛰어내리는 스카이점프는 이곳의 명물이다.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body