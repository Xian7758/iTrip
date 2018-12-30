    var map = new BMap.Map("allmap");
    var points = Array();
    map.enableScrollWheelZoom(true);
    map.centerAndZoom(new BMap.Point(116.417854, 39.921988), 12);
    var hotel_map_list = new Array();
    var markers = Array();

    //addhotelmark($("div[hid='1']").attr("id"), $("div[hid='1']").attr("x"), $("div[hid='1']").attr("y"), $("div[hid='1']").attr("hid"), $("div[hid='1']").attr("hn"));

    $(document).ready(function () {
        $(".a_map").click(function () {
            focus_img($("div[id='" + $(this).attr("data2") + "']").attr("x"), $("div[id='" + $(this).attr("data2") + "']").attr("y"))
        });
    })

    function init_map() {
        hotel_map_list = new Array();
        markers = Array();
    }

    function focus_img(x, y) {
        /*	   for(var ii=0; ii<hotel_map_list.length;ii++)
        		{
        		    if(hotel_map_list[ii][0]!=x && hotel_map_list[ii][1]!=y)
        			{
        			   hotel_map_list[ii][2]="0";
        			}
        		}
        	     setport();*/
        var pointd = Array();
        pointd[0] = new BMap.Point(x, y)
        map.setViewport(pointd);
    }

    function addhotelmark(hotelid, x, y, id, hotelname) {
        var marker = new ComplexCustomOverlay(new BMap.Point(x, y), id, hotelname);

        //var content = data_info[i][2];
        markers["hotelid" + hotelid] = marker;
        map.addOverlay(marker); // 将标注添加到地图中
        points.push(new BMap.Point(x, y));

        if (hotel_map_list.length == 0) {
            hotel_map_list.push(Array(x, y, "1", hotelid));
        }
        var falg_h = 0;
        for (var ii = 0; ii < hotel_map_list.length; ii++) {
            if (hotel_map_list[ii][3] == hotelid) {
                if (hotel_map_list[ii][2] == "0") {
                    hotel_map_list[ii][2] = "1";
                }
                falg_h = 1;
            }
        }
        if (falg_h == 0) {
            hotel_map_list.push(Array(x, y, "1", hotelid));
        }
        setport();

    }

    function clearhotelmark(hotelid) {
        map.removeOverlay(markers["hotelid" + hotelid]);
        for (var ii = 0; ii < hotel_map_list.length; ii++) {
            if (hotel_map_list[ii][3] == hotelid) {
                if (hotel_map_list[ii][2] == "1") {
                    hotel_map_list[ii][2] = "0";
                }
            }
        }
        setport();
    }

    function setport() {
        points2 = Array();
        for (var ii = 0; ii < hotel_map_list.length; ii++) {
            if (hotel_map_list[ii][2] == "1") {
                points2.push(new BMap.Point(hotel_map_list[ii][0], hotel_map_list[ii][1]));
            }
        }
        map.setViewport(points2);
    }

    // 复杂的自定义覆盖物
    function ComplexCustomOverlay(point, id, hotelname) {
        this._point = point;
        this._id = id;
        this._text = hotelname;
    }
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function (map) {
        this._map = map;
        var div = this._div = document.createElement("div");
        div.style.cssText = "position:absolute;height:32px;padding:0;margin:0;font-size:12px;white-space:nowrap;z-index:" + BMap.Overlay.getZIndex(this._point.lat);

        var div2 = this._div2 = document.createElement("div");
        div2.style.cssText = "float:left;width:22px;height:32px;background:url(http://img.qmango.com/images15/hotellist/pos.png) no-repeat;color:#31a9f2;text-align:center;line-height:25px;z-index:" + BMap.Overlay.getZIndex(this._point.lat);
        div.appendChild(div2);
        div2.appendChild(document.createTextNode(this._id));

        var div3 = this._div3 = document.createElement("div");
        div3.style.cssText = "float:left;padding-left:17px;margin-top:2px;border-top:1px solid #31a9f2;border-bottom:1px solid #31a9f2;height:18px;line-height:18px;position:absolute;left:10px;background:#fff;z-index:" + BMap.Overlay.getZIndex(this._point.lat);
        div3.appendChild(document.createTextNode(this._text));

        var span = this._span = document.createElement("span");
        span.style.cssText = "float:right;width:10px;height:20px;margin-right:-10px;background:url(http://img.qmango.com/images15/hotellist/tips-end.png) no-repeat right;margin-top:-1px;z-index:" + BMap.Overlay.getZIndex(this._point.lat);
        div3.appendChild(span);

        div.appendChild(div3);

        map.getPanes().labelPane.appendChild(div);
        return div;
    }

    ComplexCustomOverlay.prototype.draw = function () {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - 10 + "px";
        this._div.style.top = pixel.y - 30 + "px";
    }