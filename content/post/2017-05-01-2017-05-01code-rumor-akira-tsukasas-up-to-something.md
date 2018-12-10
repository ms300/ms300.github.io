---
title: '2017-05-01code RUMOR: AKIRA TSUKASA’S UP TO SOMETHING…'
author: fukkix
type: post
date: 2017-05-01T15:25:59+00:00
url: /blog/2017/05/01/2017-05-01code-rumor-akira-tsukasas-up-to-something/
featured_image: /wp-content/uploads/2017/06/Challenge-700x220.jpg
views:
  - "20"
cover:
  - https://www.ingresscode.cn/wp-content/uploads/2017/06/Challenge.jpg
categories:
  - BLOGcode
  - 已解决

---
<p style="text-align: center;">
  <a href="http://investigate.ingress.com/2017/05/01/rumor-akira-tsukasas-up-to-something/" target="_blank" rel="noopener">RUMOR: AKIRA TSUKASA’S UP TO SOMETHING…</a>
</p>

<p style="text-align: center;">
  mllylylddvwbnvlvwllvdddfvxvdnfvcl
</p>

<p style="text-align: center;">
  mr.e-sziliegzgxhjzlq
</p>

<p style="text-align: center;">
  zbisjbsbskbizbsbjsjbjsbsjbmbjwjbzbmbjbksbajbskbjzbms<!--more-->
</p>

<p style="text-align: center;">
  <span style="color: #cccccc;">————————分割线————————</span>
</p>

<p style="text-align: center;">
  <strong>mllylylddvwbnvlvwllvdddfvxvdnfvcl</strong>
</p>

<p style="text-align: center;">
  使用的字母以a=0规则换成数字，看起来都是5以下
</p>

<p style="text-align: center;">
  12 11 11 24 11 24 11 3 3 21 22 1 13 21 11 21 22 11 11 21 3 3 3 5 21 23 21 3 13 5 21 2 11
</p>

<p style="text-align: center;">
  虽然棋盘密码没结果，不过把所有数字按个位数形式逐个相加得到104，可以被8整除
</p>

<p style="text-align: center;">
  考虑游程编码（以0和1组成，每变更一次数字代表从0变1或者1变0，变更的数字为0或者1连续的数量）
</p>

<p style="text-align: center;">
  从0开始
</p>

<p style="text-align: center;">
  01101010011110100111101000111001001101000110101101100101011011100011100000110110001101110111000001101101
</p>

<p style="text-align: center;">
  按8位一组分组，再进行二进制转换
</p>

<p style="text-align: center;">
  得<span style="color: #99cc00;"><strong>jzz94ken867pm</strong></span>
</p>

<p style="text-align: center;">
  <span style="color: #cccccc;">————————分割线————————</span>
</p>

<p style="text-align: center;">
  <strong>mr.e-sziliegzgxhjzlq</strong>
</p>

<p style="text-align: center;">
  mr.e看成关键词，google得到
</p>

<p style="text-align: center;">
  <span style="color: #999999;"><em>#Mr. E was the anonymous person who helped the new Mystery Incorporatedin their earlier mysteries. His alias was a pun of the word &#8220;mystery.&#8221;</em></span>
</p>

<p style="text-align: center;">
  mystery在keyword列表中
</p>

<p style="text-align: center;">
  <img class="alignnone size-full wp-image-224" src="https://www.ingresscode.cn/wp-content/uploads/2017/06/Mr._E.png" alt="" width="290" height="163" />
</p>

<p style="text-align: center;">
  Mr.E
</p>

<p style="text-align: center;">
  sziliegzgxhjzlq部分以mystery为key进行Vigenere转换得到gbqseninifofine
</p>

<p style="text-align: center;">
  加上关键词：<span style="color: #99cc00;"><strong>gbq79mystery945ne</strong></span>
</p>

<p style="text-align: center;">
  <span style="color: #cccccc;">————————分割线————————</span>
</p>

<p style="text-align: center;">
  <strong>zbisjbsbskbizbsbjsjbjsbsjbmbjwjbzbmbjbksbajbskbjzbms</strong>
</p>

<p style="text-align: center;">
  分析字母出现频率
</p>

<img class="aligncenter wp-image-225 size-large" src="https://www.ingresscode.cn/wp-content/uploads/2017/06/2-5-1024x482.png" alt="" width="1024" height="482" />

<p style="text-align: center;">
  b是可以当成分割的字符
</p>

<p style="text-align: center;">
  z isj s sk iz s jsj js sj m jwj z m j ks aj sk jz ms
</p>

<p style="text-align: center;">
  推测被分割的部分是Morse码，但是需要一套新的映射方式
</p>

<p style="text-align: center;">
  除了b剩下的j和s出现最多，很可能分别对应Morse的“.”和“-”
</p>

<p style="text-align: center;">
  根据排除法，推测数字部分不是由Morse后的两个字母组成，而是直接的Morse数字表示
</p>

（假设数字由两字母组成，组合方式是tw,th,fo,fi,si,se,ei,ni共8种，其中e可以当首或尾，按密文分组格式来看，代表数字的就是sk+iz、s+jsj、m+j、ks+aj、sk+jz这5组，sk+iz和sk+jz可能对应tw\th、fo\fi、si\se，但是t和e的Morse码只占一位，无法完全匹配这些组合，所以排除两字母表示法）

<p style="text-align: center;">
  最后试出的映射方式是
</p>

<p style="text-align: center;">
  j[.] i[..] m[&#8230;] k[&#8230;.] s[-] w[&#8211;] z[&#8212;] a[&#8212;-]
</p>

<p style="text-align: center;">
  （当数字部分确定直接Morse表示后就从sk、iz、ks、aj、sk开始推导，再推关键词部分，所有映射依次确定后得到前后缀字母）
</p>

<p style="text-align: center;">
  即<strong><span style="color: #99cc00;">OFT62TRANSPOSE496JV</span></strong>
</p>

&nbsp;

&nbsp;