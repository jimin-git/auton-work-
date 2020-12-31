//HTTP프로토콜 HTTPS로 변경  (local - 주석, 개발 / 운영 - 주석 해제 후 반영)
/*if (document.location.protocol == 'http:') {
	document.location.href = document.location.href.replace('http:', 'https:');
}*/

$(document).ready(function(){
/*
아래 아코디언은 공통으로 사용중이므로 수정시 주의
*/

	//  아코디언 스크립트 버전 1
	/*
	$('.accordion_wrap div').eq(0).children().addClass('on');
	$('.accordion').click(function(){
		$(this).toggleClass('on');
		$('.panels').slideUp();

		if($(this).hasClass('on')){
			$(this).find('+.panels').slideDown();
			$('.accordion').removeClass('on');
			$(this).addClass('on');
		}
	});
	*/

	//  아코디언 스크립트 버전 2
	$('.accordion_wrap div').eq(0).children().addClass('on');
	$('.accordion').click(function(){
		$(this).next().slideToggle('fast');
		$(this).toggleClass('on');
	});

/* ****************** 로그인 ****************** */
	// 비밀번호 텍스트로 보기
	$('.icon_view_pw').click(function(){
		if( $(this).hasClass('on') ){
			$(this).prev().attr('type','password');
			$(this).removeClass('on');
		}else{
			$(this).prev().attr('type','text');
			$(this).addClass('on');
		}
	});
	// 로그인하기 / 비밀번호 찾기
	$('.find_idpw li > a.login_form').click(function() {
		$('.forgot').hide();
		$('.login').show();
		$('.required').hide();
		$('#email').val('');
	});
	$('.find_idpw li > a.forgot_form').click(function() {
		$('.forgot').show();
		$('.login').hide();
		$('.required').hide();
	});

/* ****************** 대시보드 ****************** */
	$('input.lcs_check').lc_switch();

	// 알람클릭시
	/*$('.alarm').click(function(){
		$('.alarm_list').toggleClass('on');
	});*/


	// 상단 언어 선택
	$('.select_language').on('click',function(){
		$('.sub_menu_group').slideUp();
		$('.dropdown-menu.account_menu').removeClass('on');
		$('.dropdown').toggleClass('open');
		$('.dropdown-menu.language_menu').toggleClass('on');


		$('.language_menu li a').on('click',function(){
			$('.select_language').text($(this).html());
			$('.dropdown-menu.language_menu').toggleClass('on');
		});

	});




	var NID = $('.top_nav_wrap h1 span').text();
	var windowWidth = $( window ).width();

	if(windowWidth <= 768){
		$('.select_anothercompany').text(NID);
	}else{
		$('.select_anothercompany').text('다른 아이디로 로그인');
	}

	$(window).resize(function() {
		var windowWidth = $( window ).width();
		if(windowWidth <= 768){
			$('.select_anothercompany').text(NID);
		}else{
			$('.select_anothercompany').text('다른 아이디로 로그인');
		}


	});


	//상단 상호선택
	$('.select_anothercompany').on('click',function(){

	});

	$('.request_btn a').on('click',function(){
		$('body').addClass('popup_scroll');
	});
	$('.close_popup').on('click',function(){
		$('body').removeClass('popup_scroll');
	});

	/*
	$('.account_list li a').eq(0).on('click',function(event){
		 event.preventDefault();
		 var txtLink = $(this).attr("href");
		// alert(txt +"가 클릭됨");
		$('.popup_anothercompany .btn_checked .btn-default').eq(0).attr('href',txtLink);
		$('.popup_anothercompany .popup_tit').text('이동확인');
		$('.popup_anothercompany .popupText').text('선택한 계정으로 이동 하시겠습니까?');
		$('.popup_anothercompany').show();
		$('.add_validity_bg').show();

	});
	*/




	// 하위메뉴 노출 스크립트
	$('.slide_sub').on('click',function(){
		$('.sub_menu_group').slideToggle();
		$('.dropdown-menu').removeClass('on');
		$('.dropdown').removeClass('open');

		return false;
	});

	$('body ,#content a').on('click',function(){
		$('.sub_menu_group').slideUp();
		$('.dropdown').removeClass('open');
		$('.dropdown-menu.language_menu').removeClass('on');
		//return false;
	});

	//오늘의 주문 탭
	$(".order_counts:not("+$(".order_torrent li a.on").attr("href")+")").hide();
	$(".order_torrent li a").click(function(){
		$(".order_torrent li a").removeClass("on");
		$(this).addClass("on");
		$(".order_counts").hide();
		$($(this).attr("href")).show();
		return false;
	});

	// 서비스바로가기 슬라이드
	$("#content_slider").lightSlider({
		loop:false,
		keyPress:true,
		item: 5.3,
		pager: false,
		slideMargin:20,
		controls: false
	});

/* ****************** 내정보수정 ****************** */
	$('#reportNumberY').on('click',function(){
		$('.report_number').hide();
		$('#reportNumber').val("");
		if($('#reportNumber').hasClass("input-required")){
    	 	$('#reportNumber').removeClass('input-required');
		}

	})
	$('#reportNumberN').on('click',function(){
		$('.report_number').show();
		if(!$('#reportNumber').hasClass("input-required")){
			$('#reportNumber').addClass('input-required');
		}
	})
	//개인일 때 사업자 번호 필수 제거

/* ****************** 영업일설정 ****************** */
	// 등록일 달력
	flatpickr = $('.flatpickr').flatpickr({
		dateFormat: 'Y-m-d',
		locale: {
			firstDayOfWeek: 1,
			weekdays: {
				shorthand: ['일', '월', '화', '수', '목', '금', '토'],
				longhand: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			},
			months: {
				shorthand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
				longhand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			},
		},
		//disableMobile: "true" // 모바일 모드에서 해당 플러그인 달력을 사용하는 설정
		allowInput: true, // 사용자가 직접입력 가능 옵션
		onChange: function(selectedDates, dateStr, instance) {
			if (instance.element.id == 'holidayStartdate') {
				flatpickr.forEach(function (item, index) {
					if (item.element.id == 'holidayEnddate') {
						item.set("minDate",dateStr);
					}
				});
			}
			if (instance.element.id == 'holidayEnddate') {
				flatpickr.forEach(function (item, index) {
					if (item.element.id == 'holidayStartdate') {
						item.set("maxDate",dateStr);
					}
				});
			}
		}
	});

/* ****************** 가맹관리 ******************
	// 하위 매장/상위 매장 탭
	$(".store_panel > div:not("+$("ul.store_tabs li a.active").attr("href")+")").hide();
	$("ul.store_tabs li a").click(function(){
		$("ul.store_tabs li a").removeClass("active");
		$(this).addClass("active");
		$(".store_panel > div").hide();
		$($(this).attr("href")).show();
		//return false;
	});
*/
	/*$('.panel_contents').hide();
	var getactiveTab = $('.store_tabs li.active a').attr('data-id');
	$('#' + getactiveTab).show();

	$('.store_tabs a').on('click touchend',function(event){

		event.preventDefault()
		$(this).parents('.store_tabs').find('li').removeClass('active');
		$(this).parent().addClass('active');

		var currentTab = $(this).attr('data-id');
		$(this).parents('#tabs').find('.panel_contents').hide();
		$('#' + currentTab).show();
	});*/

	// 이미지 업로드 선택 시
	$('#uploadImg').click(function(){
		$('.upload_file').show();
	});
	$('#basicImg').click(function(){
		$('.upload_file').hide();
	});
	// 하위 매장 등록 담당자 연락처 '-' 자동 넣기
	$('#contactNum').on("keyup",function(){
		var _val = this.value.trim();
		this.value = autoHypenPhone(_val) ;
	});
	// 하위 매장 등록 사업자 번호 '-' 자동 넣기
	$('#companyNum').on("keyup",function(){
		event = event || window.event;
	   var _val = this.value.trim();
	   this.value = licenseNum(_val) ;
	});

	// 상위 매장 탭 클릭 시 운영여부 숨기기
	$("ul.store_tabs li.second").click(function(){
		$('.store_tabs_hide').hide();
	})
	$("ul.store_tabs li.first").click(function(){
		$('.store_tabs_hide').show();
	})

/* ****************** 홍보관리 ****************** */
	// 대표 이미지 이미지 업로드 선택 시
	$('#uploadImg').on('click',function(){
		$('.img_view').show();
	});
	$('#basicImg').on('click',function(){
		$('.img_view').hide();
	});
/* ****************** 상품목록 ****************** */
	// 상품목록 전체 체크
	$("#allPid").change(function() {
		if (this.checked) {
			$(".single_form_check").each(function() {
				this.checked = true;
			})
		} else {
			$(".single_form_check").each(function() {
				this.checked = false;
			})
		}
	});
	$(".single_form_check").click(function() {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$(".single_form_check").each(function() {
				if (!this.checked){
					isAllChecked = 1;
				}
			})
			if (isAllChecked == 0) {
				$("#allPid").prop("checked", true);
			}
		} else {
			$("#allPid").prop("checked", false);
		}
	});

/* ****************** 단품등록 ****************** */
	// 서비스명 셀렉트박스
	$(".select2_demo_3").select2({
		language: "ko",
		placeholder: "서비스명 검색",
		allowClear: true
	});

	// 주문관리 상품구분 서비스 선택 시
	// 상품구분 서비스 선택 시
	$('#service').click(function(){
		$('.select_service').show();
		$('.select_product').hide();
		// step2 서비스소요시간 노출
		$('.service_time').show();
		$('#serviceRequiredTime').prop("disabled", false);
		$('#deliveryprice').prop("disabled", true);
		$('.product_rethink').hide();
		$('.product-receiveMethod').hide();
		$('.product-deliveryType').hide();
		$('.product-deliveryprice').hide();
	});
	// 상품구분 상품 선택 시
	$('#product').click(function(){
		$('.select_service').hide();
		$('.select_product').show();
		// step2 재고 노출
		$('#deliveryprice').prop("disabled", false);
		$('.service_time').hide();
		$('#serviceRequiredTime').prop("disabled", true);
		$('.product_rethink').show();
		$('.product-receiveMethod').show();
		$('.product-deliveryType').show();
		$('.product-deliveryprice').show();
	});
	// 상품구분 특화상품 선택 시
	$('#specialize').click(function(){
		$('.select_service').hide();
		$('.select_product').show();
		// step2 재고 노출
		$('#deliveryprice').prop("disabled", false);
		$('.service_time').hide();
		$('#serviceRequiredTime').prop("disabled", true);
		$('.product_rethink').show();
		$('.product-receiveMethod').show();
		$('.product-deliveryType').show();
		$('.product-deliveryprice').show();
	});
	$('#productAll').click(function(){
		$('.select_service').hide();
		$('.select_product').show();
	});

	// 자율 텍스트 입력 옵션
	$('#textN').on('click',function(){
		$('.textyn').hide();
		$('#textOption').prop("disabled", true);
	});
	$('#textY').on('click',function(){
		$('.textyn').show();
		$('3#extOption').prop("disabled", false);
	});

	// 카테고리 추가 모달 스크립트
	$('#categoryModal').click(function(){
		$('.add_category_bg').show();
		$('#addCategory').show();
		$('ul.categoryList').find('a').removeClass('active');
		$('body').addClass('popup_scroll');
//		$('body,html').animate({
//			scrollTop: 0
//		}, 500);

	});
	$('.add_close').click(function(){
		$('.add_category_bg').hide();
		$('#addCategory').hide();
		$('body').removeClass('popup_scroll');
	});
	$('.category_box .left li a').click(function(){
		$('.category_box .right').show();
	});

	// 차량옵션 미사용 선택 시
	$('#caroptionY').click(function(){
		$('.car_option').hide();
	});
	// 차량옵션 사용 선택 시
	$('#caroptionN').click(function(){
		$('.car_option').show();
	});

	// 오토딜리버리 tooltip
	$('.autodilbury_info').popover('hide');


	// step
	$('#step1 .go_next').click(function(){

		// 스텝별 필수항목 체크
		var requiredMessage = '';
		$('.input-required.step1:visible').each (function(idx, el){
			if ($(this).val() == '' || ($(this).hasClass('int') && $(this).val() == '0')) {
				requiredMessage = $(this).data('name');
				console.log(requiredMessage);
				if (requiredMessage) {
					$(this).focus();
				}
 				return false;
			} else {
			}
		});
		if (requiredMessage) {
			showPopup(requiredMessage + "을 입력해주세요.");
			return;
		}

		/*if ($('#textY').prop('checked') && $('#textOption').val()) {
			showPopup("자율 텍스트 입력옵션 입력해주세요.");
		}*/

		$('#step1').hide();
		$('#step2').show();

		$("ul.step_link li a").removeClass('active');
		$("ul.step_link li:nth-child(2) a").addClass('active');
	});
	$('#step2 .go_next').click(function(){

		// 스텝별 필수항목 체크
		var requiredMessage = '';
		$('.input-required.step2:visible').each (function(idx, el){
			if ($(this).val() == '' || ($(this).hasClass('int') && $(this).val() == '0')) {
				requiredMessage = $(this).data('name');
				if (requiredMessage) {
					$(this).focus();
				}
 				return false;
			} else {
			}
		});
		if (requiredMessage) {
			showPopup(requiredMessage + "을 입력해주세요.");
			return;
		}

		$('#step2').hide();
		$('#step3').show();
		$("ul.step_link li a").removeClass('active');
		$("ul.step_link li:nth-child(3) a").addClass('active');
	});
	$('#step2 .go_prve').click(function(){
		$('#step2').hide();
		$('#step1').show();
		$("ul.step_link li a").removeClass('active');
		$("ul.step_link li:nth-child(1) a").addClass('active');
	});
	$('#step3 .go_prve').click(function(){
		$('#step3').hide();
		$('#step2').show();
		$("ul.step_link li a").removeClass('active');
		$("ul.step_link li:nth-child(2) a").addClass('active');
	});
	// 상품관리 - 단품등록 - 상품정보고시
	/*$('#productInfo').change(function(){
		var myId = $(this).val();
		$('.product_panel').each(function(){
			myId === $(this).attr('id') ? $(this).show() : $(this).hide();
		});
	})*/
	// KC 인증 필 유/무 - 무 선택 시
	$('#kcY').click(function(){
		$('.kc_number').show();
	});
	$('#kcN').click(function(){
		$('.kc_number').hide();
	});

	$('#kcY2').click(function(){
		$('.kc_number').show();
	});
	$('#kcN2').click(function(){
		$('.kc_number').hide();
	});


/* ****************** 주문관리 ****************** */
	// 진행상태 선택 시 select박스 값 변경
	$('#productAll').click(function(){
		$('#serviceSelect').html('<option value="">전체</option><option value="DEPOSIT_READY">입금대기</option><option value="PAYMENT_SUCESS">결제완료</option><option value="DELIVERY_PREPARE">배송준비</option><option value="DELIVERY">배송중</option><option value="DELIVERY_COMPLETE">배송완료</option><option value="COMPLETE">구매확정</option><option value="RESERVATION_READY">예약대기</option><option value="RESERVATION_SUCCESS">예약완료</option><option value="SERVICE_READY">서비스대기</option><option value="ON_SERVICE">서비스중</option><option value="SERVICE_COMPLETE">서비스완료</option><option value="COMPLETE_SERVICE">서비스확정</option><option value="CANCEL_REQUEST">취소요청</option><option value="CANCEL">취소완료</option><option value="TAKEBACK_REQUEST">반품요청</option><option value="TAKEBACK_APPROVE_PART">반품승인</option><option value="TAKEBACK">반품완료</option>');
	});
	$('#product').click(function(){
		$('#serviceSelect').html('<option value="productAll">전체</option><option value="DEPOSIT_READY">입금대기</option><option value="PAYMENT_SUCESS">결제완료</option><option value="DELIVERY_PREPARE">배송준비</option><option value="DELIVERY">배송중</option><option value="DELIVERY_COMPLETE">배송완료</option><option value="COMPLETE">구매확정</option>');
	});
	$('#service').click(function(){
		$('#serviceSelect').html('<option value="serviceAll">전체</option><option value="DEPOSIT_READY">입금대기</option><option value="PAYMENT_SUCESS">결제완료</option><option value="RESERVATION_READY">예약대기</option><option value="RESERVATION_SUCCESS">예약완료</option><option value="SERVICE_READY">서비스대기</option><option value="ON_SERVICE">서비스중</option><option value="SERVICE_COMPLETE">서비스완료</option><option value="COMPLETE_SERVICE">서비스확정</option>');
	});
	$('#cancelReturn').click(function(){
		$('#serviceSelect').html('<option value="cancelAll">전체</option><option value="CANCEL_REQUEST">취소요청</option><option value="CANCEL">취소완료</option><option value="TAKEBACK_REQUEST">반품요청</option><option value="TAKEBACK_APPROVE_PART">반품승인</option><option value="TAKEBACK">반품완료</option>');
	});

	// 주문관리 전체 체크
	$('#orderStatusAll').click(function() {
		if ($('#orderStatusAll').prop('checked')) {
			$('input[name=orderStatusCheckbox]:checkbox').each(function() {
				$(this).prop('checked', true);
			});
		} else {
			$('input[name=orderStatusCheckbox]:checkbox').each(function() {
				$(this).prop('checked', false);
			});
		}
	})

	// 주문상세 - 주문상품 체크박스
	$("#orderProductAll").change(function() {
		if (this.checked) {
			$(".check_single").each(function() {
				this.checked = true;
			})
		} else {
			$(".check_single").each(function() {
				this.checked = false;
			})
		}
	});
	$(".check_single").click(function() {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$(".check_single").each(function() {
				if (!this.checked){
					isAllChecked = 1;
				}
			})
			if (isAllChecked == 0) {
				$("#orderProductAll").prop("checked", true);
			}
		} else {
			$("#orderProductAll").prop("checked", false);
		}
	});

	// 발송대기 - 전체 체크
	$("#listAllOk").change(function() {
		if (this.checked) {
			$(".check_single").each(function() {
				this.checked = true;
			})
		} else {
			$(".check_single").each(function() {
				this.checked = false;
			})
		}
	});
	$("#listAllOk2").change(function() {
		if (this.checked) {
			$(".check_single2").each(function() {
				this.checked = true;
			})
		} else {
			$(".check_single2").each(function() {
				this.checked = false;
			})
		}
	});
	$(".check_single").click(function() {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$(".check_single").each(function() {
				if (!this.checked){
					isAllChecked = 1;
				}
			})
			if (isAllChecked == 0) {
				$("#listAllOk").prop("checked", true);
			}
		} else {
			$("#listAllOk").prop("checked", false);
		}
	});
	$(".check_single2").click(function() {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$(".check_single2").each(function() {
				if (!this.checked){
					isAllChecked = 1;
				}
			})
			if (isAllChecked == 0) {
				$("#listAllOk2").prop("checked", true);
			}
		} else {
			$("#listAllOk2").prop("checked", false);
		}
	});

	// 취소관리
	/*// 취소완료 클릭 시
	$('.cancel_finish').on('click',function(){
		$(this).prev().removeClass('cancel_btn_on');
		$(this).addClass('cancel_btn_on');
		$('.search_details').show();
	});
	// 취소요청 클릭 시
	$('.cancel_btn_request').on('click',function(){
		$(this).next().removeClass('cancel_btn_on');
		$(this).addClass('cancel_btn_on');
		$('.search_details').hide();
	});*/
	//  상세조건 검색 tooltip
	$('.details_info').popover('hide');

	// 주문관리 및 서비스 관리 상세조건 스크립트
	$('.buyConf').on('click',function(){
		$('.search_details').show();
	    $('#searchType2').prop('disabled', false);
		$('select[name=searchType1] option').eq(0).prop('selected', true);
		$('select[name=searchType1] option').eq(1).prop('disabled', true);
		$('select[name=searchType2] option').eq(1).prop('selected', true);
		$('select[name=searchType2] option').eq(0).prop('disabled', true);
	});
	$('.input_radio').on('click',function(){
	    $('.search_details').hide();
	    $('select[name=searchType1] option').each(function() {
			this.disabled = false;
		});
	    $('select[name=searchType2] option').each(function() {
			this.disabled = false;
		});
	    $('#searchType2').prop('disabled', true);
	});
	$('#serviceSelect').on('change',function(){
	    if(($(this).val() == 'COMPLETE' || $(this).val() == 'COMPLETE_SERVICE' || $(this).val() == 'CANCEL' || $(this).val() == 'TAKEBACK') && $('#searchType1').val() != 'onc_all'){
		    $('.search_details').show();
		    $('#searchType2').prop('disabled', false);
		    $('select[name=searchType2] option').each(function(i) {
				if(this.value == $('#searchType1').val()){
					this.disabled = true;
					if($('#searchType1').val() == 'orderNo'){
						$('select[name=searchType2] option').eq(i+1).prop('selected',true);
					}
					else{
						$('select[name=searchType2] option').eq(0).prop('selected',true);
					}
				}
			});
		    $('select[name=searchType1] option').each(function() {
				if(this.value == $('#searchType2').val()){
					this.disabled = true;
				}
			});
		}else{
		    $('.search_details').hide();
		    $('select[name=searchType1] option').each(function() {
				this.disabled = false;
			});
		    $('select[name=searchType2] option').each(function() {
				this.disabled = false;
			});
		    $('#searchType2').prop('disabled', true);
		}

	});

/* ****************** 발주/발송관리 ****************** */
	/*// 발송완료 탭 클릭 시 상세조건 노출
	$("ul.store_tabs li.second").click(function(){
		$('.search_details').show();
	})
	$("ul.store_tabs li.first").click(function(){
		$('.search_details').hide();
	})*/

/* ****************** 공지사항 - 첨부파일 ****************** */
	$('.show_attach').click(function(){
		$('.hide_attach').toggleClass('on');
	});



/* ****************** 게시판 - 후기관리 상세보기 - 댓글 show/hide ****************** */

	$('.comment_show').click(function(){
		$(this).hide();
		$(this).parent().parent().parent().parent().find('.up_comment').show();
	});
	$('.comment_close').click(function(){
		$('.comment_show').show();
		$(this).parent().parent().parent().hide();
	});
	$('.up_comment_btn').click(function(){
		$('.input_text_show').text($(this).parent().prev().val());
		$(this).parent().parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().next().show();
	});
	// 수정버튼 클릭 시
	$('.modify').click(function(){
		$(this).parent().parent().parent().hide(); // 수정 클릭한 버튼의 부모태그를 숨기기
		$(this).parent().parent().parent().prev().show(); // 입력필드 전체를 보이기
		$(this).parent().parent().parent().prev().find('.input-group-btn').css({"display":"none"});
		$(this).parent().parent().parent().prev().find('.btn_group').show(); // 확인/취소버튼 보이기
		$(this).parent().parent().parent().prev().find('.comment_close').hide(); // x버튼 숨기기
	});
	//  삭제버튼 클릭 시
	$('.delete').click(function(){
		alert('댓글을 삭제하시겠습니까?');
		$(this).parent().parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().prev().prev().find('.comment_show').show(); // 댓글쓰기 버튼노출
	});
	// 확인버튼 클릭 시
	$('.modify_ok').click(function(){
		$(this).parent().parent().parent().hide(); // 댓글 수정 후 클릭한 버튼의 부모태그 숨기기
		$(this).parent().parent().parent().next().show(); // 수정한 댓글을 노출하기
		$(this).parent().parent().parent().next().children().next().find('.input_text_show').text($(this).parent().parent().next().children().children('input').val());
	});
	// 취소버튼 클릭 시
	$('.modify_cancel').click(function(){
		$(this).parent().parent().parent().hide(); // 댓글 수정 후 클릭한 버튼의 부모태그 숨기기
		$(this).parent().parent().parent().next().show(); // 수정한 댓글을 노출하기
	});

});

/* ****************** 영업일설정  ****************** */
// 직접입력 선택 시 input 입력가능
/*function setDay(){
	var day = $('#holidaySet').val();
	if(day == '01'){
		$('input.input_memo').attr('readonly', false);
	}else{
		$('input.input_memo').attr('readonly', true);
	}
}*/


/* ****************** 대시보드 - 메모클릭팝업 ****************** */
function memoPopup (){
	$('#setTimeBlind').show();
	$('#memoPopup').show();
}
function memoPopupClose (){
	$('#setTimeBlind').hide();
	$('#memoPopup').hide();
}
/* ****************** 서비스날짜관리 - 날짜클릭팝업 ****************** */
function settingService (){
	$('#setTimeBlind').show();
	$('#setTime').show();
}
/* ****************** 주문 현황 - 이력클릭팝업 ****************** */
function viewHistory(){
	$('#setTimeBlind').show();
	$('#viewHistory').show();
}
function viewHistoryClose(){
	$('#setTimeBlind').hide();
	$('#viewHistory').hide();
}
/* ****************** 주문상세 - 가맹점 변경 팝업 ****************** */
function changeStore(){
	$('#setTimeBlind').show();
	$('#storeChange').show();
}

function giftcardStore(){
	$('#setTimeBlind').show();
	$('#giftcardChange').show();
}

// 가맹점 변경 팝업 닫기
function changeStoreClose(){
	$('#setTimeBlind').hide();
	$('#storeChange').hide();
	$('#giftcardChange').hide();
	$('#uploadPhoto').hide();
	$('#viewDetails').hide();
}
//배송정보 / 서비스정보 팝업
/*function shippingInfoProduct(){
	$('#setTimeBlind').show();
	$('#shippingInfoProduct').show();
}
function shippingInfoService(index){
	alert(index);

	var text = '${orderInfo.orderItemList[0].reserveDate}';
	$('#setTimeBlind').show();
	$('#shippingInfoService').show();
}*/
//가맹점 변경 팝업 닫기
function changeGiftcardServiceClose(){
	$('#setTimeBlind').hide();
	$('#storeChange').hide();
	$('#giftcardChange').hide();
	$('#uploadPhoto').hide();
	$('#viewDetails').hide();
	$('#modal_status').val('');
}

function shippingInfoClose(){
	$('#setTimeBlind').hide();
	$('#shippingInfoProduct').hide();
	$('#shippingInfoService').hide();
	$('#reservationDate').hide();
}

/* ****************** 주문상세 - 시공사진 등록 팝업 ****************** */
/*function uploadPhoto(){
	$('#uploadPhoto').show();
	$('#setTimeBlind').show();
}*/
/* ****************** 주문관리 - 서비스 예약 작업지시서 상세보기 팝업 ****************** */
function viewDetails(){
	$('#viewDetails').show();
	$('#setTimeBlind').show();
}

/* 팝업창 스크립트 */
var confirmEndFunction;

function showConfirmPopup(text,fun){
	$('.popupText').text(text);
	$('.add_validity_bg_confirm').show();
	$('.add_validity_confirm').show();
/*	$('.add_validity_bg').css('z-index', 99999);*/
//	$('body,html').animate({
//		scrollTop: 0
//	}, 500);
	confirmEndFunction = fun;

}


function closeConfirmPopup(){
	$('.add_validity_bg_confirm').hide();
	$('.add_validity_confirm').hide();
}

function confirmPopup(){
//	$('.add_validity_bg_confirm').hide();
	$('.add_validity_confirm').hide();
	if (confirmEndFunction) {
		confirmEndFunction();
	}
}

/* 팝업창 스크립트 */
var endFunction;
var parentPopup;
function showPopup(text, fun, parent){
	$('.popupText').text(text);
	$('.add_validity_bg').show();
	$('#addValidity').show();
	$('.'+parent).css('z-index', 0);
	$('body').addClass('popup_scroll');
/*	$('.add_validity_bg').css('z-index', 99999);*/
//	$('body,html').animate({
//		scrollTop: 0
//	}, 500);
	endFunction = fun;
	parentPopup = parent;
}

function closePopup(){
	if(parentPopup){
		$('#addValidity').hide();
		$('.'+parentPopup).css('z-index', 999);
		if (endFunction) {
			endFunction();
		}
	}
	else{
		$('.add_validity_bg').hide();
		$('#addValidity').hide();
		if (endFunction) {
			endFunction();
		}
	}
	$('.add_validity_bg').css({'z-index':'1000'});
	$('body').removeClass('popup_scroll');

}

// 전화번호 자동 "-" 넣기
function autoHypenPhone(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if( str.length < 4){
	  return str;
	}else if(str.length < 7){
	  tmp += str.substr(0, 3);
	  tmp += '-';
	  tmp += str.substr(3);
	  return tmp;
	}else if(str.length < 11){
	  tmp += str.substr(0, 3);
	  tmp += '-';
	  tmp += str.substr(3, 3);
	  tmp += '-';
	  tmp += str.substr(6);
	  return tmp;
	}else{
	  tmp += str.substr(0, 3);
	  tmp += '-';
	  tmp += str.substr(3, 4);
	  tmp += '-';
	  tmp += str.substr(7);
	  return tmp;
	}
	return str;
}
// 사업자 번호 자동 "-" 넣기
function licenseNum(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if(str.length < 4){
		return str;
	}else if(str.length < 7){
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3);
		return tmp;
	}else{
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(1, 2);
		tmp += '-';
		tmp += str.substr(5);
		return tmp;
	}
	return str;
}

// 날짜 yyyy-mm-dd 형식 변환
function formatDate(date) {
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

// 20190325 신광섭 추가
$(function(){
	// 주문옵션 선택형 옵션 사용 시
	$('#selectOption').click(function(){
		$('.select_box_list').show();
		$('.selective_option_box').show();

	});
	// 항목옵션 추가시
	$('.select_box_list a').click(function(){
		$('.selective_option_box').show();
		$('ul.selective_option_box li').remove();
		var optionValue = $(this).prev(optionItem).val();
		var strArray = optionValue.split(',');
		var listlength = strArray.length;
		var listbox = listlength + "_01";

		var html = '';

		for(i = 0; i < listlength; i++){
			html += '<li>';
			html += '<input type="text" name="item" id="item" value="'+strArray[i]+'">';
			html += '<label for="soldYn_'+i+'"><input type="checkbox" id="soldYn_'+i+'" name="soldYn" data-id="optioncheck" onchange=""><span></span>품절</label>';
//			html += '<a href="javascript:;">항목삭제</a>';
			html += '</li>';

		}
		$('ul.selective_option_box').append(html);
		$('.selective_option_box').show();

		// 품절버튼 클릭 시 disabled 처리
		$('[data-id=optioncheck]').click(function(){
			if($(this).is(":checked")){
				$(this).parent().prev("input").attr('readonly', true);
			}else{
				$(this).parent().prev("input").attr('readonly', false);
			}
		});
		//항목삭제 버튼 클릭 시 삭제
		$('.selective_option_box li a').click(function(){
			$(this).parent().remove();
			var selectiveList = $('.selective_option_box li').length;
			if(selectiveList == 0){
				$('.selective_option_box').hide();
			}
		});
	});



	// 주문옵션 선택형 옵션 미사용 시
	$('#selectNooption').click(function(){
		$('.select_box_list').hide();
		$('.selective_option_box').hide();
	});
	// 주문옵션 텍스트 옵션 사용 시
	$('#textOption').click(function(){
		$('.text_box_list').show();
	});
	// 주문옵션 텍스트 옵션 미사용 시
	$('#textNooption').click(function(){
		$('.text_box_list').hide();
	});
	// 주문옵션 대상차종 옵션 사용 시
	$('#vehicleOption').click(function(){
		$('.vehicle_box_list').show();
	});
	// 주문옵션 대상차종 옵션 미사용 시
	$('#vehicleNooption').click(function(){
		$('.vehicle_box_list').hide();
	});

	// 1레벨 유형 선택시 addClass 'active'
	$('.production_country').click(function(){
		$('.production_country').change(function(){
			if($(this).is(":checked")){
				$(this).parents().next('a').addClass('active');
			}else{
				$(this).parents().next('a').removeClass('active');
			}
		});
	});
	// 2레벨 유형 선택시 addClass 'active'
	$('.phaseType01').click(function(){
		$('.phaseType01').change(function(){
			if($(this).is(":checked")){
				$(this).parents().next('a').addClass('active');
			}else{
				$(this).parents().next('a').removeClass('active');
			}
		});
	});
	// 3레벨 유형 선택시 addClass 'active'
	$('.phaseType02').click(function(){
		$('.phaseType02').change(function(){
			if($(this).is(":checked")){
				$(this).parents().next('a').addClass('active');
			}else{
				$(this).parents().next('a').removeClass('active');
			}
		});
	});
	// 4레벨 유형 선택시 addClass 'active'
	$('.phaseType03').click(function(){
		$('.phaseType03').change(function(){
			if($(this).is(":checked")){
				$(this).parents().next('a').addClass('active');
			}else{
				$(this).parents().next('a').removeClass('active');
			}
		});
	});

	// 구매연령 선택 시 show/hide
	$('#ageCheck').change(function(){
		var state = $('#ageCheck option:selected').val();
		if(state == 'option19'){
			$('.under19').css('display','block');
			$('.under14').hide();
		}else if(state == 'all'){
			$('.under19').hide();
			$('.under14').hide();
		}else{
			$('.under19').hide();
			$('.under14').css('display','block');
		}
	});

	// 해시태그 <textarea 특수문자 방지
	$("#hashTag").keyup(function(){
		var value = $(this).val();
		var arr_char = new Array();
		arr_char.push(" ");
		arr_char.push("'");
		arr_char.push("\"");
		arr_char.push("<");
		arr_char.push(">");
		arr_char.push(",");
		for(var i=0 ; i<arr_char.length ; i++)
		{
			if(value.indexOf(arr_char[i]) != -1)
			{
				window.alert("#\" 특수문자만 사용하실 수 있습니다.");
				value = value.substr(0, value.indexOf(arr_char[i]));
				$(this).val(value);
			}
		}
	});

	//상세정보 div 클릭 시 해당 페이지 보이기
	$('.detail_info > .form-horizontal').hide();
	$('.detail_info_tab li').eq(0).addClass('active');
	$('.detail_info > .form-horizontal').eq(0).show();
	$('.detail_info_tab li').click(function(){
		$('.detail_info_tab li').removeClass('active');
		$(this).addClass('active');
		$('.detail_info > .form-horizontal').hide();
		$('.detail_info > .form-horizontal').eq($(this).index()).show();
	});

	$('#requestAllCheck').click(function(){
		$('input[name=requestBox]').prop('checked', this.checked);
	});
});

//상품등록 2.0 차종설정
function phase(a){
	var depth01Box = a;
	var depth = $("#"+a).attr('data-id');


	if(depth==1){
		$(".depth3").hide();
		$(".depth4").hide();
	}else if(depth==2){
		$(".depth4").hide();
	}

	$('.phase_'+depth01Box).siblings().hide();
	$('.phase_'+depth01Box).show();

	//1레벨 label 클릭 시 전체 checked
	$('#domesticProduction_'+depth01Box).click(function(){
		if($(this).is(":checked")){
			$('.phaseType_'+depth01Box).prop('checked', true);
		}else{
			$('.phaseType_'+depth01Box).prop("checked",false);
		}
		$(".depth3").hide();
		$(".depth4").hide();
	});
	//2레벨 label 클릭 시 length 값보다 작으면
	$('.phaseType_'+depth01Box).click(function(){
		var checkType = $('.phaseType_'+depth01Box+':checked').length;
		if(checkType == 0){
			$('#domesticProduction_'+depth01Box).prop('checked', false);
		}else{
			$('#domesticProduction_'+depth01Box).prop('checked', true);
		}
	});
	//2레벨 label 클릭 시 전체 checked
	$('#manuFacturer_'+depth01Box).click(function(){
		if($(this).is(":checked")){
			$('.phaseType_'+depth01Box).prop('checked', true);
		}else{
			$('.phaseType_'+depth01Box).prop("checked",false);
		}
		$(".depth4").hide();
	});
	//3레벨 label 클릭 시 length 값보다 작으면
	$('.phaseType_'+depth01Box).click(function(){
		var checkType = $('.phaseType_'+depth01Box+':checked').length;
		if(checkType == 0){
			$('#manuFacturer_'+depth01Box).prop('checked', false);
		}else{
			$('#manuFacturer_'+depth01Box).prop('checked', true);
		}
	});
	$('#carName_'+depth01Box).click(function(){
		if($(this).is(":checked")){
			$('.phaseType_'+depth01Box).prop('checked', true);
		}else{
			$('.phaseType_'+depth01Box).prop("checked",false);
		}
	});
	//3레벨 label 클릭 시 length 값보다 작으면
	$('.phaseType_'+depth01Box).click(function(){
		var checkType = $('.phaseType_'+depth01Box+':checked').length;
		if(checkType == 0){
			$('#carName_'+depth01Box).prop('checked', false);
		}else{
			$('#carName_'+depth01Box).prop('checked', true);
		}
	});


}

// 대상차종 초기값 설정 버튼
function checkRelease(){
	$('.vehicle_select_box input').prop("checked",true);
	$('.facturer_list_box').removeClass('on');
	$('.car_list_box').removeClass('on');
	$('.fuel_list_box').removeClass('on');
	$('#serviceCost').val('');
}

//상품정보고시 자세히보기 팝업 열기
function fn_showInfoPopup(){
	$('#information_popup').show();
}
// 상품정보고시 자세히보기 팝업 닫기
function fn_hideInfoPopup(){
	$('#information_popup').hide();
};

//서비스등록 2.0 공임비 조회
/*$(function(){
	$('#serviceCostAdd').click(function(){
		var serviceCost = $('#serviceCost').val();//시간당공임비 입력값
		if(serviceCost == ''){
			alert("시간당공임비를 입력해주세요.");
		}else{
			$('.lts_service_list').show();
			$('.modify_btn').show();
			$('ul.service_list_wrap li').remove();

			var depth3 = $('input[name=depthType3]:checked');//3차 뎁스 체크 input
			var depth3Len = depth3.length;//3차 뎁스 체크 input length 값
			var depth3Value = depth3.val();//3차 뎁스 value 값
			var depthArray = depth3Value.split('/');

			//console.log(depth3);// 3차뎁스 체크된 수량
			alert(depth3Len);

			var html = '';

			for(i = 0; i < depth3Len; i++){

				var depthArrayLen = depthArray.length;//depth3 value 값의 length값
				var depth4 = depth3[i].defaultValue;//depth3[i] value 값
				var depth4Array = depth4.split('/');//depth3[i] value 값의 length값

				html += '<li>';
				html += '<div class="type01_box"><span class="service_num">'+ i +'</span></div>';
				html += '<div class="type02_box"><span class="service_price">'+ serviceCost +' 원</span></div>';
				html += '<div class="type01_box"><span class="which_country">'+ depth4Array[0] +'</span></div>';
				html += '<div class="type02_box"><span class="manufacturer">'+ depth4Array[1] +'</span></div>';
				html += '<div class="type03_box"><span class="vehicle_type">'+ depth4Array[2] +'</span></div>';
				html += '<div class="type02_box"><span class="workability">1.0</span></div>';
				html += '<div class="type02_box"><span class="public_service_time">20분</span></div>';
				html += '<div class="last type02_box"><span class="public_service_cost">20,000 원</span></div>';
				html += '</li>';
			}
			$('ul.service_list_wrap').append(html);
		}
	});
});
*/

//input 박스 컴마(,) 넣기
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}
//input 박스 컴마(,) 넣기 끝



//서비스등록 2.0 차종설정
function depthselect(a,b){
	if(a == "1"){//국산
		$('.facturer_list_box').removeClass('on'); //2depth box on 삭제
		$('.phase01').addClass('on'); //국산 2depth box on 추가
		$('.car_list_box').removeClass('on'); //3depth box on 삭제
		$('.domesticlist01').click(function(){ //국산 2depth 클릭 시
			var type01 = $(".domesticlist01:checked").length; //국산 2depth의 length 값
			if(type01 == 0){ //국산 2depth의 length 값이 0이면{국산 2depth가 체크가 없으면)
				$('#domesticProduction').prop("checked",false); //국산 depth1 체크해제
			}else{
				$('#domesticProduction').prop("checked",true); //국산 depth1 체크설정
			}
		});
		//현대차일때
		if(b == "1"){
			$('.car_list_box').removeClass('on');
			$('.phase01_1').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0101_type').click(function(){
				var type02 = $(".phase0101_type:checked").length;
				if(type02 == 0){
					$('#manuFacturer1').prop("checked",false);
				}else{
					$('#manuFacturer1').prop("checked",true);
				}
			});
		//기아차일때
		}else if(b == "2"){
			$('.car_list_box').removeClass('on');
			$('.phase01_2').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0102_type').click(function(){
				var type06 = $(".phase0102_type:checked").length;
				if(type06 == 0){
					$('#manuFacturer2').prop("checked",false);
				}else{
					$('#manuFacturer2').prop("checked",true);
				}
			});
		//쉐보레차일때
		}else if(b == "3"){
			$('.car_list_box').removeClass('on');
			$('.phase01_3').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0103_type').click(function(){
				var type10 = $(".phase0103_type:checked").length;
				if(type10 == 0){
					$('#manuFacturer3').prop("checked",false);
				}else{
					$('#manuFacturer3').prop("checked",true);
				}
			});
		}

	}else if(a=="2"){//수입
		$('.facturer_list_box').removeClass('on');
		$('.phase02').addClass('on');
		$('.car_list_box').removeClass('on');
		$('.domesticlist02').click(function(){
			var type11 = $(".domesticlist02:checked").length;
			if(type11 == 0){
				$('#importProduction').prop("checked",false);
			}else{
				$('#importProduction').prop("checked",true);
			}
		});
		//벤츠일때
		if(b == "1"){
			$('.car_list_box').removeClass('on');
			$('.phase02_1').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0201_type').click(function(){
				var type12 = $(".phase0201_type:checked").length;
				if(type12 == 0){
					$('#manuFacturer4').prop("checked",false);
				}else{
					$('#manuFacturer4').prop("checked",true);
				}
			});
			//첫번째 차종
			if(c == "1"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_1_1').addClass('on');
			//두번째 차종
			}else if(c == "2"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_1_2').addClass('on');
			//세번째 차종
			}else if(c == "3"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_1_3').addClass('on');
			}
		//아우디일때
		}else if(b == "2"){
			$('.car_list_box').removeClass('on');
			$('.phase02_2').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0202_type').click(function(){
				var type13 = $(".phase0202_type:checked").length;
				if(type13 == 0){
					$('#manuFacturer5').prop("checked",false);
				}else{
					$('#manuFacturer5').prop("checked",true);
				}
			});
			//첫번째 차종
			if(c == "1"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_2_1').addClass('on');
			//두번째 차종
			}else if(c == "2"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_2_2').addClass('on');
			//세번째 차종
			}else if(c == "3"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_2_3').addClass('on');
			}
		//BMW일때
		}else if(b == "3"){
			$('.car_list_box').removeClass('on');
			$('.phase02_3').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0203_type').click(function(){
				var type14 = $(".phase0203_type:checked").length;
				if(type14 == 0){
					$('#manuFacturer6').prop("checked",false);
				}else{
					$('#manuFacturer6').prop("checked",true);
				}
			});
			//첫번째 차종
			if(c == "1"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_3_1').addClass('on');
			//두번째 차종
			}else if(c == "2"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_3_2').addClass('on');
			}
		//렉서스일때
		}else if(b == "4"){
			$('.car_list_box').removeClass('on');
			$('.phase02_4').addClass('on');
			$('.fuel_list_box').removeClass('on');
			$('.phase0204_type').click(function(){
				var type15 = $(".phase0204_type:checked").length;
				if(type15 == 0){
					$('#manuFacturer7').prop("checked",false);
				}else{
					$('#manuFacturer7').prop("checked",true);
				}
			});
			//첫번째 차종
			if(c == "1"){
				$('.fuel_list_box').removeClass('on');
				$('.phase02_4_1').addClass('on');
			}
		}
	}
}

$(function(){
	//처음 페이지 로딩 시 1뎁스 국산이 체크되어있으면 국내 제조사 전체 checked
	$("#domesticProduction:checked").each(function() {
		$('.domesticlist01').prop('checked', true);
	});
	//처음 페이지 로딩 시 1뎁스 수입이 체크되어있으면 수입 제조사 전체 checked
	$("#importProduction:checked").each(function() {
		$('.domesticlist02').prop('checked', true);
	});

	//depth1 국산 선택 시 해당 depth2,depth3 전체 checked
	$('#domesticProduction').click(function(){
		if($(this).is(":checked")){
			$('.domesticlist01').prop('checked', true);
			$('.phase0101_type').prop('checked', true);
			$('.phase0102_type').prop('checked', true);
			$('.phase0103_type').prop('checked', true);
		}else{
			$('.domesticlist01').prop("checked", false);
			$('.phase0101_type').prop('checked', false);
			$('.phase0102_type').prop('checked', false);
			$('.phase0103_type').prop('checked', false);
		}
	});
	//depth1 수입 선택 시 해당 depth2,depth3 전체 checked
	$('#importProduction').click(function(){
		if($(this).is(":checked")){
			$('.domesticlist02').prop('checked', true);
			$('.phase0201_type').prop('checked', true);
			$('.phase0202_type').prop('checked', true);
			$('.phase0203_type').prop('checked', true);
			$('.phase0204_type').prop('checked', true);
		}else{
			$('.domesticlist02').prop("checked", false);
			$('.phase0201_type').prop('checked', false);
			$('.phase0202_type').prop('checked', false);
			$('.phase0203_type').prop('checked', false);
			$('.phase0204_type').prop('checked', false);
		}
	});

	//depth2 선택 시 해당 depth3 전체 checked
	$("#manuFacturer1:checked").each(function() {
		$('.phase0101_type').prop('checked', true);
	});
	$("#manuFacturer2:checked").each(function() {
		$('.phase0102_type').prop('checked', true);
	});
	$("#manuFacturer3:checked").each(function() {
		$('.phase0103_type').prop('checked', true);
	});
	$("#manuFacturer4:checked").each(function() {
		$('.phase0201_type').prop('checked', true);
	});
	$("#manuFacturer5:checked").each(function() {
		$('.phase0202_type').prop('checked', true);
	});
	$("#manuFacturer6:checked").each(function() {
		$('.phase0203_type').prop('checked', true);
	});
	$("#manuFacturer7:checked").each(function() {
		$('.phase0204_type').prop('checked', true);
	});

	//2depth 제조사 선택시 해당 차종 checked
	$('#manuFacturer1').click(function(){
		if($(this).is(":checked")){
			$('.phase0101_type').prop('checked', true);
		}else{
			$('.phase0101_type').prop("checked",false);
		}
	});
	$('#manuFacturer2').click(function(){
		if($(this).is(":checked")){
			$('.phase0102_type').prop('checked', true);
		}else{
			$('.phase0102_type').prop("checked",false);
		}
	});
	$('#manuFacturer3').click(function(){
		if($(this).is(":checked")){
			$('.phase0103_type').prop('checked', true);
		}else{
			$('.phase0103_type').prop("checked",false);
		}
	});
	$('#manuFacturer4').click(function(){
		if($(this).is(":checked")){
			$('.phase0201_type').prop('checked', true);
		}else{
			$('.phase0201_type').prop("checked",false);
		}
	});
	$('#manuFacturer5').click(function(){
		if($(this).is(":checked")){
			$('.phase0202_type').prop('checked', true);
		}else{
			$('.phase0202_type').prop("checked",false);
		}
	});
	$('#manuFacturer6').click(function(){
		if($(this).is(":checked")){
			$('.phase0203_type').prop('checked', true);
		}else{
			$('.phase0203_type').prop("checked",false);
		}
	});
	$('#manuFacturer7').click(function(){
		if($(this).is(":checked")){
			$('.phase0204_type').prop('checked', true);
		}else{
			$('.phase0204_type').prop("checked",false);
		}
	});


	/* 20190523 시공 브랜드 설정 input 버튼 */
	$("input[name=brandName]").click(function(){
		if($(this).is(":checked")){
			$(this).parent().addClass('on');
		}else{
			$(this).parent().removeClass('on');
		}
	});

});

// 대표브랜드 popup 열기
function representativeOpen(){

	var brandNameLength = $("input[name=brandName]:checked").length;

	if(brandNameLength == 0){
		alert("브랜드 가맹점을 1개이상 선택해야 이용이 가능합니다.");
		return false;
	}
	$('body').addClass('popup_scroll');
	$('#representative_brand_box').show();
	$('.representative_brand_wrap ul li').remove();

	$('input[name=brandName]:checked').each(function(){
		var hasValue = $(this).val();

		var hasId = $(this).attr('id');
		console.log(hasId);
		var hasText = $(this).parent().text();

		var html = '<li>';
			html += '<label for="'+ hasId +'_1">';
			html += '<input type="radio" id="'+ hasId +'_1" name="representativeBrand" value="'+ hasValue +'"><span></span>'+ hasText +'</label>';
			html += '</li>';
		$('.representative_brand_wrap ul').append(html);
//		$('.representative_brand_wrap ul li').eq(0).children().find('input').prop("checked", true);
		$("input:radio[name=representativeBrand][value='"+ $("#representBrand").val() +"']").prop("checked",true);
	});
}

// 대표브랜드 popup 닫기
function representativeClose(){
	$('#representative_brand_box').hide();
	$('body').removeClass('popup_scroll');
}


// 대표브랜드 저장버튼
function storageBtn(){
	$('input[name=representativeBrand]').each(function(){
		if($(this).is(":checked")){
			var storageName = $(this).parent().text();
			var representativeBrand = $(this).val();
			$('.representative_brand_btn .representative_brand_name').text(storageName);
			$('.representative_brand_btn span').text("가 대표브랜드로 설정되었습니다.");
			$("#inputForm #representBrand").val(representativeBrand);
		}
	});
	$('#representative_brand_box').hide();
	$('body').removeClass('popup_scroll');
}

//대시보드 당월누적매출 셀러별 각각 너비주기
$(function(){
	$('.count_sales').each(function(){
		var conWidth = $(this).find('div').length;
		var conWidth = 100 / conWidth;
		var conWidth = conWidth + '%';
		$(this).find('div').css({width:conWidth});
	});
});

/**
 * Notification Message - Warning
 * @param message
 */
function warningMessage() {
    toastr.warning(
        $.t(message),
        $.t('common.message.title.defaultTitle'), {
            "positionClass" : "toast-top-center",
            "showDuration" : "400",
            "hideDuration" : "1000",
            "timeOut" : "2500",
            "extendedTImeout" : "1000"
        }
    );
}

/**
 * Notification Message - success
 * @param message
 */
function successMessage() {
    toastr.success(
        $.t(message),
        $.t('common.message.title.defaultTitle'), {
            "positionClass" : "toast-top-center",
            "showDuration" : "400",
            "hideDuration" : "1000",
            "timeOut" : "2500",
            "extendedTImeout" : "1000"
        }
    );
}
