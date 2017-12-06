const ejs = require('ejs')
const heredoc = require('heredoc')

let tpl = heredoc(()=> {/*
  <xml>
  <ToUserName><![CDATA[<%= toUsername %>]]></ToUserName>
  <FromUserName><![CDATA[<%= formUsername %>]]></FromUserName>
  <CreateTime><% createTime %></CreateTime>

  <MsgType><![CDATA[<%= msgType %>]]></MsgType>
  <% if (msgType === 'text') { %>

    <Content><![CDATA[<%= content %>]]></Content>

  <% } else if (msgType === 'image') { %>

    <Image>
      <MediaId><![CDATA[<%= content.media_id %>]]></MediaId>
    </Image>

  <% } else if (msgType === 'voice') { %>

    <Voice>
      <MediaId><![CDATA[<%= content.media_id %>]]></MediaId>
    </Voice>

  <% } else if (msgType === 'video') { %>

    <Video>
      <MediaId><![CDATA[<%= content.media_id %>]]></MediaId>
      <Title><![CDATA[<%= content.title %>]]></Title>
      <Description><![CDATA[<%= content.description %>]]></Description>
    </Video> 

  <% } else if (msgType === 'music') { %>

    <Music>
      <Title><![CDATA[<%= content.title %>]]></Title>
      <Description><![CDATA[<%= content.description %>]]></Description>
      <MusicUrl><![CDATA[<%= content.musicUrl %>]]></MusicUrl>
      <HQMusicUrl><![CDATA[<%= content.hqMusicUrl %>]]></HQMusicUrl>
      <ThumbMediaId><![CDATA[<%= content.media_id %>]]></ThumbMediaId>
    </Music>

  <% } else if (msgType === 'news') { %>

    <ArticleCount><% content.length %> </ArticleCount>
    <Articles>

      <% content.forEach(function(item) { %>

        <item>
          <Title><![CDATA[<%= item.title %>]]></Title> 
          <Description><![CDATA[<%= item.description1 %>]]></Description>
          <PicUrl><![CDATA[<%= item.picUrl %>]]></PicUrl>
          <Url><![CDATA[<%= item.url %>]]></Url>
        </item>

      <% }) %>

    </Articles>

  <% } %>
  
  </xml>
*/});

let compiled = ejs.compile(tpl)

module.exports = {
  compiled
}