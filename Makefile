# Makefile, um den Inhalt aller Dateien im aktuellen Ordner in eine einzige Datei zu schreiben

OUTPUT = alle_inhalte.txt
EXCLUDE = Makefile $(OUTPUT)

# Ermittelt alle Dateien im aktuellen Verzeichnis (ohne das Makefile und die Zieldatei selbst)
FILES = $(shell find . -maxdepth 1 -type f ! -name 'Makefile' ! -name '$(OUTPUT)')

all: $(OUTPUT)

$(OUTPUT):
	@echo "Führe Zusammenführung aus..."
	@> $(OUTPUT) # Zieldatei leeren oder erstellen
	@for file in $(FILES); do \
		echo "=== DATEI: $$file ===" >> $(OUTPUT); \
		cat "$$file" >> $(OUTPUT); \
		echo -e "\n\n" >> $(OUTPUT); \
	done
	@echo "Fertig! Alle Inhalte wurden in '$(OUTPUT)' geschrieben."

clean:
	@rm -f $(OUTPUT)
	@echo "Zieldatei gelöscht."