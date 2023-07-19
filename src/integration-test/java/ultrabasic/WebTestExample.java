package ultrabasic;

import com.codeborne.selenide.Selenide;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class WebTestExample {
    @BeforeEach
    public void openPage() {
        Selenide.open("http://localhost:8080/template");
    }
}
