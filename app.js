"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (_a) {
                var code = _a.code;
                wx.request({
                    url: 'http://192.168.0.100:3000/getUserInfo',
                    method: 'POST',
                    data: {
                        code: code,
                    },
                    success: function () {
                        console.log(arguments);
                    },
                });
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFTO0lBQ1YsUUFBUTtRQUFSLGlCQXlDQztRQXZDQyxJQUFJLElBQUksR0FBYSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLFlBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNYLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLHVDQUF1QztvQkFDNUMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLElBQUksTUFBQTtxQkFDTDtvQkFDRCxPQUFPO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3hCLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBRUosQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQUUsRUFDWDtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvPzogd3guVXNlckluZm9cbiAgfVxufVxuXG5BcHA8SU15QXBwPih7XG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIHZhciBsb2dzOiBudW1iZXJbXSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKHtjb2RlfSkge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwMDozMDAwL2dldFVzZXJJbmZvJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcy51c2VySW5mbylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH1cbn0pIl19