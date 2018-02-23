function mMult(A,B)
{
var C=new Array();
for (var i=0;A[i]!=null;i++) {
	C[i]=new Array();
	for (var j=0;B[j]!=null;j++) {
		Cij=0;
		for (k=0;A[i][k]!=null;k++) {
			Cij=Cij+A[i][k]*B[k][j];
			}
		C[i][j]=Cij;
		}
	}
return C
}



function mScalarMult(A,k)
{
var C=new Array();
for (var i=0;A[i]!=null;i++) {
	C[i]=new Array();
	for (var j=0;A[i][j]!=null;j++) {
		C[i][j]=A[i][j]*k;
		}
	}
return C
}


function mAdd(A,B)
{
var C=new Array();
for (var i=0;A[i]!=null;i++) {
	C[i]=new Array();
	for (var j=0;B[j]!=null;j++) {
		C[i][j]=A[i][j]+B[i][j];
		}
	}
return C
}

function mSub(A,B)
{
var C=new Array();
for (var i=0;A[i]!=null;i++) {
	C[i]=new Array();
	for (var j=0;B[j]!=null;j++) {
		C[i][j]=A[i][j]-B[i][j];
		}
	}
return C
}

function mDraw(A,Id,rMax,cMax)
{
for (var i=0;i<rMax;i++) {

if (A[i]!=null) {
	for (var j=0;j<cMax;j++) 
		{cellId=Id+(i+1).toString()+(j+1).toString();
		if (A[i][j]!=null) {document.getElementById(cellId).innerHTML = A[i][j];}
		else {document.getElementById(cellId).innerHTML = "";}
	}
	}

else {
	for (var j=0;j<cMax;j++) 
		{cellId=Id+(i+1).toString()+(j+1).toString();
		document.getElementById(cellId).innerHTML = "";
	}
	}

}
}



function mResize(A,r,c)
{
var C=new Array();
for (var i=0;i<r;i++) {
	C[i]=new Array();
	if (A[i]!=null) {for (var j=0;j<c;j++) {if (A[i][j]==null) {C[i][j]=0;} else {C[i][j]=A[i][j];}}}
	else {for (var j=0;j<c;j++) {C[i][j]=0;}}
	}
return C
}