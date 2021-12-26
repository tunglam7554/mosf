$("document").ready(function () {
    $(".btn-target").on("click", function () {
        var popup = $(this).attr("target");
        if ($(popup).hasClass("show")) {
            $(popup).removeClass("show");
            $(".overlay").removeClass("show");
        } else {
            $(popup).addClass("show");
            $(".overlay").attr("target", popup);
            $(".overlay").addClass("show");
        }
    });
    $(".overlay").on("click", function () {
        var popup = $(this).attr("target");
        $(popup).removeClass("show");
        $(".overlay").removeClass("show");
    });
    $("input[type=file]").change(function () {
        var filename = "";
        for (let index = 0; index < this.files.length; index++) {
            console.log(this.files[index]);
            filename += this.files[index].name + "; ";
        }
        $(this).parent(".form-upload").children("span").text(filename);
    });
});
