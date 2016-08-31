<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" meta:progid="SharePoint.WebPartPage.Document" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head>
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" /> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">        
	<SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false"/>
    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="Content/App.css" />    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/game.css"/>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
	Facilities Request Form   
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderUtilityContent" runat="server">    
	<script type="text/javascript" src="Scripts/TPRFacilities.js"></script>
        <div class="container-fluid">
            <h1>BattleShips</h1>
    <h2>Ported from a <em>GROOVY</em> implementation</h2>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js.min.js"></script>
    <div>Original code at <a href="https://github.com/tristian2/BattleShips">github.com/tristian2/BattleShips</a></div>
    <div>Ported code at <a href="https://github.com/tristian2/BattleShipsJS">github.com/tristian2/BattleShipsJS</a></div>
    <div id="playArea">
      <div id="board"></div>
      <div id="status"></div>
      <div id="fireStatus"></div>
      <div id="score"></div>
      <div id="selectors">
        <select id="row">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select id="column">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
      </div>
      <div id="controls">
        <input type="button" value="reset" onclick="initialise();"/>
        <input type="button" value="fire" onclick="fire($('#row option:selected').text(),$('#column option:selected').text(),ocean);"/>
      </div>
        </div>
    <script type="text/javascript" src="Scripts/TPRFacilitiesResources.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            //this works with the PlaceHolderUtilityContent so that OOB SharePoint form is removed from the DOM
            $('#__REQUESTDIGEST').appendTo('form'); //we need to keep the sigest as removing the first for will blow it away
            $("form").first().remove();
            $("#s4-workspace").css("height", "");
            initialise();
        });        
    </script>   
</asp:Content>







