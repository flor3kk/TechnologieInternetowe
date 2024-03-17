<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
 <head>
 <title>Orders</title>
 <style>
 * {
 margin: 10px;
 }
 person {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: black;
   }
   address {
    border: 1px solid white;
   } 
   </style>
    </head> 
    <body>
    <h2>Orders</h2>
    <table class="my-table">
    <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Residence address</th>
    <th>Correspondence address</th>
    </tr>
    <xsl:for-each select="person">
    <tr>
    <td><xsl:value-of select="name"/></td>
    <td><xsl:value-of select="surname"/></td>
    <xsl:for-each select="address">
    <td><xsl:value-of select="city"/>&#160;<xsl:value-of
   select="street"/></td>
    </xsl:for-each>
    </tr>
    </xsl:for-each>
    </table>
    </body>
    </html>
   </xsl:template>
</xsl:stylesheet>   