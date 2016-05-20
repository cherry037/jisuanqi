/* www.miaov.com blue 2010-9-29 */

var sNum1='';
var sOpr='';

var bNeedClear=false;	//是否需要清除输入框中已有的内容

function calc(iNum1, iNum2, sOpr)
{
	var iResult=0;
	switch(sOpr)
	{
		case '×':
			iResult=iNum1*iNum2;
			break;
		case '+':
			iResult=iNum1+iNum2;
			break;
		case '-':
			iResult=iNum1-iNum2;
			break;
		case '÷':
			iResult=iNum1/iNum2;
			break;
		default:
			iResult=iNum2;
	}
	
	return iResult;
}

function doInput()
{
	var oInput=document.getElementById('input');
	var sHtml=this.innerHTML;
	
	switch(sHtml)
	{
		case '=':
			oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			
			sNum1='';
			sOpr='';
			bNeedClear=true;
			break;
		case '+':
		case '-':
		case '×':
		case '÷':
			bNeedClear=true;
			sOpr=sHtml;
			sNum1=oInput.value;
			break;
		case 'C':
			oInput.value='0';
			sNum1='';
			sOpr='';
			break;
		default:	//数字
			if(bNeedClear)
			{
				oInput.value=parseInt(sHtml);
				bNeedClear=false;
			}
			else
			{
				oInput.value=parseInt(oInput.value+sHtml);
			}
			break;
	}
}

window.onload=function ()
{
	var aLi=document.getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmousedown=doInput;
		aLi[i].onmouseover=function ()
		{
			this.className='active';
		};
		
		aLi[i].onmouseout=function ()
		{
			this.className='';
		};
	}
};