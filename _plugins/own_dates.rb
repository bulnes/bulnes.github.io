module Jekyll
  module OwnDates
    MONTHS = {
      "01" => "janeiro", 
      "02" => "fevereiro", 
      "03" => "março",
      "04" => "abril", 
      "05" => "maio", 
      "06" => "junho",
      "07" => "julho", 
      "08" => "agosto", 
      "09" => "setembro",
      "10" => "outubro", 
      "11" => "novembro", 
      "12" => "dezembro"
    }

    # http://man7.org/linux/man-pages/man3/strftime.3.html
    def brazilianDate(date)
      tempo = time(date)
      "#{tempo.strftime("%e")} de #{MONTHS[tempo.strftime("%m")]} de #{tempo.strftime("%Y")}"
    end

    def shorterBrazilianDate(date)
      tempo = time(date)
      "#{tempo.strftime("%e")} de #{MONTHS[tempo.strftime("%m")]}"
    end

    def html5date(date)
      tempo = time(date)
      "#{tempo.strftime("%Y")}-#{tempo.strftime("%m")}-#{tempo.strftime("%d")}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::OwnDates)