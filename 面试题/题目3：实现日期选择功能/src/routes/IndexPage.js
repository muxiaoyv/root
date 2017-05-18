import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
	console.log('From: ', dates[0], ', to: ', dates[1]);
	console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

function disabledDate(current) {
  // can not select days before today and today
	return (current&&current.valueOf() <(Date.now()-86400))||(current&&current.valueOf() > new Date("9/1/2017").getTime())
}

function IndexPage() {
  return (
    <div>
	<DatePicker 
		format="YYYY-MM-DD HH:mm:ss"
		disabledDate={disabledDate} onChange={onChange} />
  </div>
  );
}

IndexPage.propTypes = {
};
export default connect()(IndexPage);
  					