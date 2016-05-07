﻿define({
	root: ({
		commonWebmap: {
			selector: {
				lblWebMap: "แผนที่",
				lblLocation: "ตำแหน่ง",
				lblContent: "เนื้อหา",
				lblPopup: "ป๊อปอัพ",
				lblControls: "พิเศษ",
				lblOverview: "ภาพรวมของแผนที่",
				lblLegend: "สัญลักษณ์",
				lblGeocoder: "ที่อยู่หรือค้นหาสถานที่",
				tooltipGeocoder: "อนุญาตให้ผู้ใช้ค้นหาที่อยู่และสถานที่บนแผนที่ของคุณ",
				loadingTitle: "กำลังโหลดหัวเรื่อง",
				entry: "เข้า",
				entries: "เข้า",
				section: "ส่วน",
				sections: "ส่วน",
				and: "และ",
				action: "ดำเนินการในส่วน",
				actions: "ดำเนินการในส่วน",
				originalWebmap: "แผนที่ใช้ในการเผยแพร่",
				browseMaps: "เลือกแผนที่",
				createMap: "สร้างแผนที่",
				current: "แผนที่ปัจจุบัน",
				select: "เลือกหรือสร้างแผนที่",
				newMap: "แผนที่ที่เลือกใหม่",
				newCreatedMap: "แผนที่ที่สร้างใหม่",
				webmapDefault: "แผนที่เริ่มต้น",
				customCfg: "ปรับการตั้งค่า",
				tooltipLocation: "กำหนดตำแหน่งที่แสดงบนแผนที่",
				tooltipContent: "กำหนดระยะการมองเห็นชั้นข้อมูล",
				tooltipPopup: "เลือกป๊อปอัพที่จะเปิดเมื่อที่การแสดงแผนที่",
				tooltipOverview: "แสดงแผนที่ภาพรวมแบบเล็กตลอดแผนที่หลัก",
				tooltipLegend: "เลือกแสดงสัญลักษณ์แผนที่บนแผนที่ ซึ่งจะเป็นประโยชน์อย่างมากในกรณีที่แผนที่มีหลายชั้นข้อมูลและหลายสัญลักษณ์",
				mapCfgInvite: "ใช้การควบคุมการตั้งค่าแผนที่ของคุณ",
				lblLocationAlt: "ถ่ายทอดจากแผนที่ฉบับแรก",
				tooltipLocationAlt: "แผนที่สถานที่ตั้งนี้จะตรงกับแผนที่แรกในซีรีส์ เปลี่ยนค่านี้โดยไปที่การตั้งค่า> ตัวเลือกแผนที่"
			},
			configure: {
				btnReset: "รีเซ็ต",
				btnCancel: "ยกเลิก",
				tocTitle: "รายการแผนที่",
				tocExplain: "เลือกชั้นข้อมูลที่จะแสดง",
				tocNoData: "ไม่มีชั้นข้อมูลที่สามารถปรับแต่งได้",
				tocSave: "บันทึกสารบัญแผนที่",
				extentTitle: "ตำแหน่งแผนที่",
				extentExplain: "เลือกและขยายแผนที่ตามที่กำหนด วิธีการมองหาผู้อ่าน",
				extentSave: "บันทึกตำแหน่งแผนที่",
				popupTitle: "แผนที่ป๊อปอัพ",
				popupExplain: "คลิกบนฟีเจอร์เพื่อเปิดป๊อปอัพที่คุณต้องการแสดง",
				popupSave: "บันทึกการปรับบนป๊อปอัพ",
				hintNavigation: "แผนที่นำทางถูกปิดใช้งาน"
			},
			editor: {
				loading: "กรุณารอสักครู่ในขณะที่ตัวแก้ไขแผนที่กำลังโหลด",
				newTitle: "สร้างแผนที่ใหม่",
				editTitle: "แก้ไขแผนที่",
				titleLbl: "ชื่อ",
				titlePh: "ชื่อแผนที่…",
				folderLbl: "แผนที่จะถูกสร้างในโฟลเดอร์เดียวกันเป็นเรื่องราว",
				creating: "กำลังสร้างแผนที่",
				saving: "กำลังบันทึกแผนที่",
				success: "บันทึกแผนที่",
				successCreate: "สร้างแผนที่",
				cancelTitle: "ยกเลิกการเปลี่ยนแปลงใด ๆ ที่ไม่ได้บันทึก",
				errorDuplicate: "คุณมีแผนที่ที่มีชื่อเรื่องว่า",
				errorCreate: "ไม่สามารถสร้างแผนที่ กรุณาลองอีกครั้ง",
				errorSave: "ไม่สามารถบันทึกแผนที่ กรุณาลองอีกครั้ง",
				notavailable1: "ขออภัยการสร้างหรือแก้ไขแผนที่ไม่ได้รับการสนับสนุนใน Firefox เนื่องจากมีข้อจำกัดทางเทคนิค คุณอาจต้องการที่จะสร้างเรื่องราวของคุณโดยใช้เว็บเบราเซอร์ที่แตกต่างกันหรือใช้วิธีแก้ปัญหาต่อไป",
				notavailable2: "ขออภัยการสร้างหรือแก้ไขแผนที่ไม่สนับสนุนตั้งแต่โปรแกรมแผนที่เรื่องที่ไม่ได้เป็นเจ้าภาพใน %PRODUCT% กรุณาติดต่อผู้ดูแล ArcGIS ของคุณสำหรับข้อมูลเพิ่มเติม",
				notavailable3: "ขออภัยการสร้างหรือแก้ไขแผนที่ไม่สนับสนุนกับรุ่นของPortal for ArcGIS นี้ (ต้อง 10.4 หรือสูงกว่า) กรุณาติดต่อผู้ดูแล ArcGIS ของคุณสำหรับข้อมูลเพิ่มเติม",
				notavailable4: "คุณสามารถสร้างแผนที่โดยใช้ %MV%  แล้วกลับมาที่นี่เพื่อเพิ่มลงในเรื่องราวของคุณ",
				notavailable5: "คุณสามารถแก้ไขแผนที่โดยใช้ %MV% แล้วกลับมาที่นี่และ %apply% เพื่อดความเปลี่ยนแปลง",
				notavailable6: "แมพวิวเวอร์",
				notavailable7: "โหลดแผนที่อีกครั้ง"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "องค์กรของฉัน",
					onlineLabel: "ArcGIS Online",
					contentLabel: "เนื้อหาของฉัน",
					favoritesLabel: "รายการโปรด"
				},
				title: "เลือกแผนที่",
				searchTitle: "ค้นหา",
				ok: "ตกลง",
				cancel: "ยกเลิก",
				placeholder: "ใส่คำที่ใช้ค้นหาหรือ ID ของเว็บแมพ"
			}
		}
	}),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hr": 1, 
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1, 
	"zh-tw": 1 
});
