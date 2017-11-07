/**
 * Created by zdliu on 2016/2/17.
 */
(function() {
	
	window.Unlock = function(obj) {
		this.height = document.documentElement.clientWidth * 0.8;
		this.width = document.documentElement.clientWidth * 0.8;
		this.gestureNum = obj.gestureNum || 3;
		this.callback = obj.callback || null;
	};
	
	// 初始化解锁密码面板
	Unlock.prototype.drawCle = function(x, y) {
		this.ctx.strokeStyle = '#CFE6FF';
		this.ctx.lineWidth = 2;
		this.ctx.beginPath();
		this.ctx.arc(x, y, this.r, 0, Math.PI * 2, true);
		this.ctx.closePath();
		this.ctx.stroke();
	};
	
	// 初始化圆心
	Unlock.prototype.drawPoint = function() {
		for(var i = 0; i < this.lastPoint.length; i++) {
			this.ctx.fillStyle = '#CFE6FF';
			this.ctx.beginPath();
			this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.fill();
		}
	};
	
	// 初始化状态线条
	Unlock.prototype.drawStatusPoint = function(type) {
		for(var i = 0; i < this.lastPoint.length; i++) {
			this.ctx.strokeStyle = type;
			this.ctx.beginPath();
			this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.stroke();
		}
	};
	
	// 解锁轨迹
	Unlock.prototype.drawLine = function(po, lastPoint) {
		this.ctx.beginPath();
		this.ctx.lineWidth = 3;
		this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);
		//console.log(this.lastPoint.length);
		for(var i = 1; i < this.lastPoint.length; i++) {
			this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y);
		}
		this.ctx.lineTo(po.x, po.y);
		this.ctx.stroke();
		this.ctx.closePath();
	};
	
	// 创建解锁点的坐标，根据canvas的大小来平均分配半径
	Unlock.prototype.createCircle = function() {
		var n = this.gestureNum;
		var count = 0;
		this.r = this.ctx.canvas.width / (2 + 4 * n); // 公式计算
		this.lastPoint = [];
		this.arr = [];
		this.restPoint = [];
		var r = this.r;
		for(var i = 0; i < n; i++) {
			for(var j = 0; j < n; j++) {
				count++;
				var obj = {
					x: j * 4 * r + 3 * r,
					y: i * 4 * r + 3 * r,
					index: count
				};
				this.arr.push(obj);
				this.restPoint.push(obj);
			}
		}
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		for(var i = 0; i < this.arr.length; i++) {
			this.drawCle(this.arr[i].x, this.arr[i].y);
		}
	};
	
	
	// 获取touch点相对于canvas的坐标
	Unlock.prototype.getPosition = function(e) {
		var rect = e.currentTarget.getBoundingClientRect();
		var po = {
			x: e.touches[0].clientX - rect.left,
			y: e.touches[0].clientY - rect.top
		};
		return po;
	};
	
	// 核心变换方法在touchmove时候调用
	Unlock.prototype.update = function(po) {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		for(var i = 0; i < this.arr.length; i++) { // 每帧先把面板画出来
			this.drawCle(this.arr[i].x, this.arr[i].y);
		}
		this.drawPoint(this.lastPoint); // 每帧花轨迹
		this.drawLine(po, this.lastPoint); // 每帧画圆心
		for(var i = 0; i < this.restPoint.length; i++) {
			if(Math.abs(po.x - this.restPoint[i].x) < this.r && Math.abs(po.y - this.restPoint[i].y) < this.r) {
				this.drawPoint(this.restPoint[i].x, this.restPoint[i].y);
				this.lastPoint.push(this.restPoint[i]);
				this.restPoint.splice(i, 1);
				break;
			}
		}
	};
	
	// 检测密码
	Unlock.prototype.checkPass = function(psw1, psw2) {
		var p1 = '',
			p2 = '';
		for(var i = 0; i < psw1.length; i++) {
			p1 += psw1[i].index + psw1[i].index;
		}
		for(var i = 0; i < psw2.length; i++) {
			p2 += psw2[i].index + psw2[i].index;
		}
		return p1 === p2;
	};
	
	// touchend结束之后对密码和状态的处理
	Unlock.prototype.storePass = function(psw) {
		console.log(window.localStorage.getItem('gesturePassword') == null);
		if(window.localStorage.getItem('gesturePassword') == null && psw.length < 4) {
			document.getElementById('gestureTitle').innerHTML = '绘制解锁图案,至少连接4个点';
			this.drawStatusPoint('red');
			delete this.pswObj.step;
			return;
		}
		if(this.pswObj.step == 1) {
			if(this.checkPass(this.pswObj.fpassword, psw)) {
				this.pswObj.step = 2;
				this.pswObj.spassword = psw;
				document.getElementById('gestureTitle').innerHTML = '密码保存成功';
				this.drawStatusPoint('#2CFF26');
				window.localStorage.setItem('gesturePassword', JSON.stringify(this.pswObj.spassword));
			} else {
				document.getElementById('gestureTitle').innerHTML = '两次不一致，重新输入';
				this.drawStatusPoint('red');
				delete this.pswObj.step;
			}
		} else if(this.pswObj.step == 2) {
			if(this.checkPass(this.pswObj.spassword, psw)) {
				document.getElementById('gestureTitle').innerHTML = '解锁成功';
				this.drawStatusPoint('#2CFF26');
				if(this.callback) {
					this.callback && this.callback(JSON.stringify(this.pswObj.spassword));
				}
				var ml = document.getElementById("Unlock");
				document.body.removeChild(ml);
			} else {
				this.drawStatusPoint('red');
				document.getElementById('gestureTitle').innerHTML = '解锁失败';
			}
		} else {
			this.pswObj.step = 1;
			this.pswObj.fpassword = psw;
			document.getElementById('gestureTitle').innerHTML = '再次输入';
		}

	};
	
	Unlock.prototype.makeState = function() {
		if(this.pswObj.step == 2 && document.getElementById('gestureTitle')) {
			document.getElementById('gestureTitle').innerHTML = '请解锁';
		}
	};
	
	Unlock.prototype.initDom = function() {
		var wrap = document.createElement('div');
		var str = '<h4 id="gestureTitle" style="color: #22C3AA;font-size:1rem;padding-top:1.5em;" class="title">绘制解锁图案,至少连接4个点</h4>' +
			'<canvas id="canvas" width="' + this.width + '" height="' + this.height + '" style="background-color: #305066;display: inline-block;"></canvas>';
		wrap.setAttribute('style', 'position: fixed;top:0;left:0;right:0;bottom:0;z-index:9999;text-align: center;background-color: #305066;');
		wrap.setAttribute('id', 'Unlock');
		wrap.innerHTML = str;
		document.body.appendChild(wrap);
	};
	
	Unlock.prototype.init = function() {
		this.initDom();
		this.pswObj = window.localStorage.getItem('gesturePassword') ? {
			step: 2,
			spassword: JSON.parse(window.localStorage.getItem('gesturePassword'))
		} : {};
		this.lastPoint = [];
		this.makeState();
		this.touchFlag = false;
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.createCircle();
		this.bindEvent();
	};
	
	Unlock.prototype.reset = function() {
		this.makeState();
		this.createCircle();
	};
	
	Unlock.prototype.bindEvent = function() {
		var self = this;
		this.canvas.addEventListener("touchstart", function(e) {
			e.preventDefault(); // 某些android 的 touchmove不宜触发 所以增加此行代码
			var po = self.getPosition(e);
			//console.log(po);
			for(var i = 0; i < self.arr.length; i++) {
				if(Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {
					self.touchFlag = true;
					self.drawPoint(self.arr[i].x, self.arr[i].y);
					self.lastPoint.push(self.arr[i]);
					self.restPoint.splice(i, 1);
					break;
				}
			}
		}, false);
		this.canvas.addEventListener("touchmove", function(e) {
			if(self.touchFlag) {
				self.update(self.getPosition(e));
			}
		}, false);
		this.canvas.addEventListener("touchend", function(e) {
			if(self.touchFlag) {
				self.touchFlag = false;
				self.storePass(self.lastPoint);
				setTimeout(function() {
					self.reset();
				}, 300);
			}

		}, false);
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}
})();