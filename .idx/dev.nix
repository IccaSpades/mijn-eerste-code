{ pkgs, ... }: {
  # Kies de juiste versie
  channel = "stable-23.11";
  
  # Installeer Python (dit hebben we nodig voor de 'server')
  packages = [
    pkgs.python3
  ];
  
  # Vertel Firebase Studio hoe de preview werkt
  idx = {
    extensions = [ ];
    previews = {
      enable = true;
      previews = {
        web = {
          # Het commando om de website te starten
          command = ["python3" "-m" "http.server" "$PORT" "--bind" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}