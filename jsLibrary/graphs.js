function plotXY(Xdata,Ydata,canvasName,Ycolour)
{

// set up and clear graph space
	var canvas = document.getElementById(canvasName); 
	var ctx=canvas.getContext('2d');
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 1;

// define and draw axis

	var xAxis=new axis (Xdata,canvas.width,25,0);
	var yAxis=new axis (Ydata,-canvas.height,30,canvas.height);

// draw x axis
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.font="12pt Calibri";	
	ctx.fillStyle="rgb(0,0,0)";

	ctx.beginPath();
	ctx.moveTo(trans(xAxis.min,xAxis),trans(yAxis.min,yAxis));
	ctx.lineTo(trans(xAxis.max,xAxis),trans(yAxis.min,yAxis));
	for (var x=xAxis.min;x<=xAxis.max;x=x+xAxis.step)
	{
		ctx.moveTo(trans(x,xAxis),trans(yAxis.min,yAxis));
		ctx.lineTo(trans(x,xAxis),trans(yAxis.min,yAxis)+5);
		ctx.fillText(x.toPrecision(2), trans(x,xAxis)-9,trans(yAxis.min,yAxis)+20);
	}
	ctx.stroke();
	ctx.closePath();

// draw y axis

	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.beginPath();
	ctx.moveTo(trans(xAxis.min,xAxis),trans(yAxis.min,yAxis));
	ctx.lineTo(trans(xAxis.min,xAxis),trans(yAxis.max,yAxis));
	for (var y=yAxis.min;y<=yAxis.max;y=y+yAxis.step)
	{
		ctx.moveTo(trans(xAxis.min,xAxis),trans(y,yAxis));
		ctx.lineTo(trans(xAxis.min,xAxis)-5,trans(y,yAxis));
		ctx.fillText(y.toPrecision(2), trans(xAxis.min,xAxis)-25,trans(y,yAxis)+4);
	}

	ctx.stroke();
	ctx.closePath();

// plot chart

if (Array.isArray(Ydata[0])) {
	for (var j=0; j<Ydata.length;j++) {
		plotData(Xdata,Ydata[j],xAxis,yAxis,Ycolour[j],ctx)
	}
	} else {
	plotData(Xdata,Ydata,xAxis,yAxis,Ycolour,ctx)
}

}

function axis(data,screenSize,screenMargin,screenOffset)
{
	var i;

	if (Array.isArray(data[0])) {
	this.min=data[0][0];
	this.max=data[0][0];
	for (j=0; j<data.length; j++)
	for (i=0; i<data[j].length; i++)
	{	
		this.min=Math.min(data[j][i],this.min);
		this.max=Math.max(data[j][i],this.max);
	}
	}
	else {
	this.min=data[0];
	this.max=data[0];
	for (i=0; i<data.length; i++)
	{	
		this.min=Math.min(data[i],this.min);
		this.max=Math.max(data[i],this.max);
	}
	}

	if (this.max==this.min) {
		this.max=this.max+0.5;
		this.min=this.min-0.5;
	}
	this.step=this.max-this.min;

	this.step = Math.pow(10,Math.floor(Math.log(this.step)/Math.LN10));
	this.min=this.step*Math.floor(this.min/this.step);
	this.max=this.step*Math.ceil(this.max/this.step);

	this.m=Math.sign(screenSize)*(Math.abs(screenSize)-2*screenMargin)/(this.max-this.min);
	this.c=screenOffset+Math.sign(screenSize)*screenMargin-this.m*this.min;

}


function plotData(xData,yData,xAxis,yAxis,colData,ctx)
{
	ctx.strokeStyle = colData;
	ctx.beginPath();

	ctx.moveTo(trans(xData[0],xAxis),trans(yData[0],yAxis));
	for (var i=1; i<xData.length; i++)
	{
		ctx.lineTo(trans(xData[i],xAxis),trans(yData[i],yAxis));
	}

	ctx.stroke();
	ctx.closePath();
}


function trans(x,t)
{
	return x*t.m+t.c;
}