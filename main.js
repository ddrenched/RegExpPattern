const regArr = [
			{ option: '账号类：Email地址', value: '/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/'},
			{ option: '账号类：手机号码', value: '/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/'},
			{ option: '昵称类：中文、英文、数字、下划线', value: '/^[\/u4e00-\/u9fa5\w]*$/'},
			{ option: '昵称类：中文、英文、数字', value: '/^[\/u4e00-\/u9fa5A-Za-z0-9]*$/'},
			{ option: '密码类：字母开头，可包含英文字母、数字、下划线，6-20位密码', value: '/^[a-zA-Z]\w{5,19}$/'},
			{ option: '密码类：字母开头，可包含英文字母、数字，6-20位密码', value: '/^[a-zA-Z][a-zA-Z0-9]{5,19}$/'},
			{ option: '密码类：包含英文字母、数字，6-20位密码', value: '/^[a-zA-Z0-9]{6,20}$/'},
			// { option: '包含大小写字母，数字，下划线，5-17位密码', value: '/^([a-z]|[A-Z])+\w{5,17}$/'},
			{ option: '身份证号', value: '/(^\d{15}$)|(^\d{17}([0-9]|x|X)$)/'},
			{ option: '2-6个中文字符', value: '/^[\/u4e00-\/u9fa5]{2,6}$/'},
			{ option: '中国邮政编码', value: '/^[1-9]\d{5}$/'},
			{ option: 'QQ号码', value: '/^[1-9]\d{4,}$/'},
			{ option: '数字(若干个)', value: '/^\d*$/'},
			{ option: '数字(至少1个)', value: '/^\d+$/'},
			{ option: '数字(至多1个)', value: '/^\d?$/'},
			{ option: 'n个数字', value: '/^\d{n}$/'},
			{ option: '至少n个数字', value: '/^\d{n,}$/'},
			{ option: '至多n个数字', value: '/^\d{0,n}$/'},
			{ option: 'm-n个数字', value: '/^\d{m,n}$/'},
			{ option: '6-20位所有字符', value: '/^.{6,20}$/'},
			{ option: '26个英文字母', value: '/^[a-zA-Z]*$/'},
			{ option: '26个小写英文字母', value: '/^[a-z]*$/'},
			{ option: '26个大写英文字母', value: '/^[A-Z]*$/'},
			{ option: '6-20位所有字符', value: '/^.{6,20}$/'},
			{ option: '6-20位所有字符', value: '/^.{6,20}$/'}
]

var main = new Vue({
	el: '#main',
	data: {
		select: 'waiting input...',
		regs: regArr
	}
})

