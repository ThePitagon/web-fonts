# travis-web-fonts

### Latest version

Version: 1.1.0
Updated date: July 10, 2017

### Supports

- `Local font` use local font when requested font available in system.
- `Smooth` use some techniques to display font smoothly in almost browsers.
- Full supported `languages`
- Suitable for `private or local systems`

### Details

Font family, font weight, font style available:

<table>
  <thead>
    <tr>
      <th>Font family</th>
      <th>100</th>
      <th>200</th>
      <th>300</th>
      <th>400</th>
      <th>500</th>
      <th>600</th>
      <th>700</th>
      <th>900</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Noto Sans</td>
      <td></td>
      <td></td>
      <td></td>
      <td>R, I</td>
      <td></td>
      <td></td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Noto Sans UI</td>
      <td></td>
      <td></td>
      <td></td>
      <td>R, I</td>
      <td></td>
      <td></td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Noto Serif</td>
      <td></td>
      <td></td>
      <td></td>
      <td>R, I</td>
      <td></td>
      <td></td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Roboto</td>
      <td>T, TI</td>
      <td></td>
      <td>L, LI</td>
      <td>R, I</td>
      <td>M, MI</td>
      <td></td>
      <td>B, BI</td>
      <td>Bk, BkI</td>
    </tr>
    <tr>
      <td>Roboto Condensed</td>
      <td></td>
      <td></td>
      <td>L, LI</td>
      <td>R, I</td>
      <td></td>
      <td></td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Segoe UI</td>
      <td></td>
      <td>L, LI</td>
      <td>sL, sLI</td>
      <td>R, I</td>
      <td></td>
      <td>sB, sBI</td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Helvetica Neue</td>
      <td>uL, uLI</td>
      <td></td>
      <td>L, LI</td>
      <td>R, I</td>
      <td>M</td>
      <td></td>
      <td>B, BI</td>
      <td></td>
    </tr>
    <tr>
      <td>Helvetica Neue Condensed</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>B</td>
      <td>Bk</td>
    </tr>
    <tr>
      <td>Mulish</td>
      <td>uL, uLI</td>
      <td>L, LI</td>
      <td>sL, sLI</td>
      <td>R, I</td>
      <td>M, MI</td>
      <td>sB, sBI</td>
      <td>B, BI</td>
      <td>Bk, BkI</td>
    </tr>
  </tbody>
</table>

`R` Regular `I` Italic `B` Bold `BI` Bold Italic `M` Medium `MI` Medium Italic `Bk` Black `BkI` Black Italic `L` Light `LI` Light Italic `T` Thin `TI` Thin Italic `sL` Semilight `sLI` Semilight Italic `sB` Semibold `sBI` Semibold Italic `uL` Ultra Light `uLI` Ultra Light Itaclic

### Usage

Download version of font you need from `release` folder, extract it to font folder in your project (`fonts` for example), then include it in header of page.

```html
<head>
    ...
    <link rel="stylesheet" href="fonts/travis-web-font-noto/css/noto.min.css">
    <link rel="stylesheet" href="fonts/travis-web-font-roboto/css/roboto-aio.min.css">
    <link rel="stylesheet" href="fonts/travis-web-font-helvetica-neue/css/helvetica-neue.min.css">
    <link rel="stylesheet" href="fonts/travis-web-font-segoe/css/segoe.min.css">
    <link rel="stylesheet" href="fonts/travis-web-font-mulish/css/mulish.min.css">
    ...
</head>
```
