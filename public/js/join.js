$(document).ready(function () {
    // 약관 동의 체크박스 요소들을 가져오기
    const all_agree_checkbox = document.getElementById('all_agree');
    const terms_agree_checkbox = document.getElementById('terms_agree');
    const privacy_agree_checkbox = document.getElementById('privacy_agree');
    const marketing_agree_checkbox = document.querySelector('.marketing_agree');

    // 필수 약관 동의 체크박스들을 배열에 담기
    const required_checkboxes = [terms_agree_checkbox, privacy_agree_checkbox];

    // 약관 전체 동의 체크박스를 클릭했을 때
    all_agree_checkbox.addEventListener('change', function () {
        // 전체 동의 체크박스의 상태에 따라 필수 항목 체크박스들을 전체 선택 또는 해제
        required_checkboxes.forEach(checkbox => {
            checkbox.checked = all_agree_checkbox.checked;
        });
    });

    // 필수 약관 항목들이 모두 동의되었을 때만 다음 단계로 진행
    required_checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const allRequiredChecked = required_checkboxes.every(checkbox => checkbox.checked);
            all_agree_checkbox.checked = allRequiredChecked;
            all_agree_checkbox.indeterminate = !allRequiredChecked;

            // 필수 약관 항목들이 모두 동의되었을 때 다음 단계로 진행 (예시)
            // 여기에 실제로 할 작업을 넣으면 됩니다.
            if (allRequiredChecked) {
                // 동의된 경우의 처리
                console.log('필수 약관 모두 동의됨');
                // 이 부분에 실제 다음 단계로 진행하는 로직을 추가하세요.
            } else {
                // 동의가 안 된 경우의 처리
                console.log('필수 약관 중 하나 이상 미동의');
                // 이 부분에 필요한 처리를 추가하세요.
            }


        });
    });  
})
