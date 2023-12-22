var container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
var options = {
  // 지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.5511694, 126.9882266), // 지도의 중심 좌표
  level: 7, // 지도의 레벨(확대, 축소 정도)
  // disableClickZoom: true // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정
};

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

/* 마커 그리기 시작 */
$.getJSON("../public/json/composeStore.json", function (data) { // 마커를 그리기 위한 위도, 경도 json
  $.each(data, function (index, item) {
    // 마커 이미지 변경
    var imageSrc = "../public/images/map/cafe.svg", // 마커이미지의 주소
      imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션, 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커가 표시될 위치
    var markerPosition = new kakao.maps.LatLng(item.lat, item.lng);

    // 마커를 생성
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커에 이미지 적용
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);
  });
});